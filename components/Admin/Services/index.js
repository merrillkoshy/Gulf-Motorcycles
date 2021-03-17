import { useEffect, useState } from "react";
import firebase from "../../../lib/firebaseConfig";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import PublishedStateSwitcher from "./PublishedStateSwitcher";
import PricingAdjustor from "./PricingAdjustor";

const Services = (props) => {
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [status, setStatus] = useState(null);
  const [services, setServices] = useState([]);
  var servicesRef = firebase.database().ref("/services");
  const handleSwitch = () => {
    console.log(itemCode);
  };
  const servicesList = () => {
    var serviceList = [];

    servicesRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const svObject = snap.val();

          serviceList.push(svObject);
        });
      })
      .then(() => {
        setServices(serviceList);
      });
    //   .then(() => {
    //     userList
    //       ? userList.map((user, i) => {
    //           return user.bookings
    //             ? Object.values(user.bookings).map((book, i) => {
    //                 if (book.bookingStatus === "open") {
    //                   totalBookingsCount = totalBookingsCount + 1;
    //                   openBookingsCount = openBookingsCount + 1;
    //                 } else if (book.bookingStatus === "ongoing") {
    //                   totalBookingsCount = totalBookingsCount + 1;
    //                   ongoingBookingsCount = ongoingBookingsCount + 1;
    //                 } else if (book.bookingStatus === "closed") {
    //                   totalBookingsCount = totalBookingsCount + 1;
    //                   closedBookingsCount = closedBookingsCount + 1;
    //                 }
    //               })
    //             : null;
    //         })
    //       : null;
    //   })
    //   .then(() => {
    //     console.log(totalBookingsCount);
    //     setTotalBookings(totalBookingsCount);
    //     setOpenBookings(openBookingsCount);
    //     setOngoingBookings(ongoingBookingsCount);
    //     setClosedBookings(closedBookingsCount);
    //   });
  };

  useEffect(() => {
    servicesList();
  }, []);
  return (
    <div className="userslist">
      <h1>Services</h1>
      <Table className="table ">
        <Thead>
          <Tr>
            <Th scope="col">Item Code</Th>
            <Th scope="col">Item Name</Th>
            <Th scope="col">MRP (AED) </Th>
            <Th scope="col">Discount</Th>
            <Th scope="col">Sales Price</Th>
            <Th scope="col">Published</Th>
          </Tr>
        </Thead>
        <Tbody>
          {services
            ? services.map((service, i) => {
                return (
                  <Tr key={"serve" + service?.itemCode}>
                    <Th scope="row">{service?.itemCode}</Th>
                    <Td>{service?.itemName}</Td>
                    <PricingAdjustor
                      key={i + service?.itemCode}
                      dbref={servicesRef}
                      itemCode={service?.itemCode}
                      mrp={service?.mrp}
                      discount={service?.discount}
                    />
                    <Td>
                      <PublishedStateSwitcher
                        dbref={servicesRef}
                        itemCode={service?.itemCode}
                        published={service?.published}
                      />
                    </Td>
                  </Tr>
                );
              })
            : null}
        </Tbody>
      </Table>
    </div>
  );
};
export default Services;
