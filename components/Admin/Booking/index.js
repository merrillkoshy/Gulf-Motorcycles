import { useEffect, useState } from "react";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import FilterModal from "../FilterModal";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import Listing from "./Listing";

const BookingList = (props) => {
  const usersRef = props.usersRef;
  const [users, setUsers] = useState(null);
  const [show, setShow] = useState(false);
  const [currentKey, setCurrentKey] = useState(false);

  const filterUsers = (key) => {
    setCurrentKey(key);

    var usersWithBookings = props?.users?.filter((user) => {
      for (const vals in user?.bookings) {
        if (user?.bookings[vals]?.bookingStatus == key) {
          user.bookings = Object.values(user?.bookings).filter((val) => {
            if (val.bookingStatus == key) return val;
          });
          return user;
        }
      }
    });

    setUsers(usersWithBookings);
  };

  const reset = () => {
    setUsers(props?.users);
    setCurrentKey(null);
    setShow(false);
  };
  useEffect(() => {
    setUsers(props?.users);
    return () => {
      setCurrentKey(null);
      setUsers(props?.users);
    };
  }, [props?.users]);

  return (
    <div className="admin-bookinglist">
      <h1>Bookings</h1>
      <Table className="table ">
        <Thead>
          <Tr>
            <Th scope="col">#</Th>
            <Th scope="col">Name</Th>
            <Th scope="col">Address</Th>
            <Th scope="col">Email</Th>
            <Th scope="col">Phone Number</Th>
            <Th scope="col">
              Bookings{" "}
              <a onClick={() => setShow(true)} className="hollowButton">
                Filter <i className="icofont-filter"></i>
              </a>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {users
            ? users.map((user, i) => {
                return user.bookings ? (
                  <Tr key={i + user?.uid}>
                    <Th scope="row">{i + 1}</Th>
                    <Td>{user?.username}</Td>
                    <Td>{user?.address}</Td>
                    <Td>{user?.email}</Td>
                    <Td>{user?.phoneNumber}</Td>
                    <Td className="bookings">
                      <Listing
                        key={i + user?.uid + "list"}
                        userName={user?.username}
                        uid={user?.uid}
                        usersRef={usersRef}
                        usersList={props?.usersList}
                        bookings={user?.bookings}
                      />
                      <FilterModal
                        show={show}
                        params={["Open", "Ongoing", "Closed"]}
                        onHide={() => setShow(false)}
                        filterUsers={filterUsers}
                        reset={reset}
                        currentKey={currentKey}
                      />
                    </Td>
                  </Tr>
                ) : null;
              })
            : null}
        </Tbody>
      </Table>
    </div>
  );
};
export default BookingList;
