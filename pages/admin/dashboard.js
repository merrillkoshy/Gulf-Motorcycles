import { useState, useEffect } from "react";
import "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";

import Content from "../../components/Admin/Content";
import SideNavigation from "../../components/Admin/sideNavigation";
import Footer from "../../components/Admin/Footer";
import Navbar from "../../components/Layouts/NavBarAdmin";
import firebase from "../../lib/firebaseConfig";
import UserList from "../../components/Admin/UserList";
import BookingList from "../../components/Admin/Booking";
import Services from "../../components/Admin/Services";
import MainServices from "../../components/Admin/MainServices";
import registerWorker from "../../lib/registerWorker";

const Admin = () => {
  var userAuth =
    firebase.auth().currentUser?.uid === process.env.NEXT_PUBLIC_ADMIN_UID;
  const [tab, currentTab] = useState("Dashboard");
  const [users, setUsers] = useState(null);
  const [totalBookings, setTotalBookings] = useState(0);
  const [openBookings, setOpenBookings] = useState(0);
  const [ongoingBookings, setOngoingBookings] = useState(0);
  const [closedBookings, setClosedBookings] = useState(0);
  const router = useRouter();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.replace("/admin");
      });
  };

  var usersRef = firebase.database().ref("/users");
  const usersList = () => {
    var userList = [];

    var totalBookingsCount = 0;
    var openBookingsCount = 0;
    var ongoingBookingsCount = 0;
    var closedBookingsCount = 0;
    usersRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const userObject = snap.val();
          userObject.uid = snap.key;
          userList.push(userObject);
        });
      })
      .then(() => {
        setUsers(userList);
      })
      .then(() => {
        userList
          ? userList.map((user, i) => {
              return user.bookings
                ? Object.values(user.bookings).map((book, i) => {
                    if (book.bookingStatus === "open") {
                      totalBookingsCount = totalBookingsCount + 1;
                      openBookingsCount = openBookingsCount + 1;
                    } else if (book.bookingStatus === "ongoing") {
                      totalBookingsCount = totalBookingsCount + 1;
                      ongoingBookingsCount = ongoingBookingsCount + 1;
                    } else if (book.bookingStatus === "closed") {
                      totalBookingsCount = totalBookingsCount + 1;
                      closedBookingsCount = closedBookingsCount + 1;
                    }
                  })
                : null;
            })
          : null;
      })
      .then(() => {
        setTotalBookings(totalBookingsCount);
        setOpenBookings(openBookingsCount);
        setOngoingBookings(ongoingBookingsCount);
        setClosedBookings(closedBookingsCount);
      });
  };

  useEffect(() => {
    if (userAuth) registerWorker();

    usersList();

    return () => {
      setUsers(null);
      setTotalBookings(0);
      setOpenBookings(0);
      setOngoingBookings(0);
      setClosedBookings(0);
      logout();
    };
  }, []);

  const Tab = (val) => {
    switch (val) {
      case "Dashboard":
        return (
          <Content
            users={users}
            totalBookings={totalBookings}
            openBookings={openBookings}
            ongoingBookings={ongoingBookings}
            closedBookings={closedBookings}
          />
        );

        break;
      case "Users":
        return <UserList users={users} />;

        break;
      case "Bookings":
        return (
          <BookingList
            usersRef={usersRef}
            users={users}
            usersList={usersList}
          />
        );
      case "Services":
        return <Services />;
        break;
      case "Main Services":
        return <MainServices />;
      default:
        return <Content />;
        break;
    }
  };
  return (
    <>
      {userAuth ? (
        <div className="admin-dashboard">
          <nav>
            <Navbar userName={"Admin"} currentTab={currentTab} />
          </nav>
          <section className="dash ptb-100">
            <div className="container">
              <div className="row">
                <SideNavigation currentTab={currentTab} />
                <div className="col">{Tab(tab)}</div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      ) : (
        <section className="error-area ptb-100">
          <div className="container">
            <div className="notfound">
              <div className="notfound-404"></div>
              <h2>Access Denied</h2>
              <span>You are not authorized</span>
              <p>
                This page is reserved for Gulf Motorcycle® for Motorcycle
                Repairs Admin
              </p>
              <Link href="/admin">
                <a className="btn btn-primary">Login</a>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Admin;
