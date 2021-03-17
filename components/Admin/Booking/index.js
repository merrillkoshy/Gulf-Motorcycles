import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import Listing from "./Listing";

const BookingList = (props) => {
  const usersRef = props.usersRef;
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState(null);

  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(props.users);
  }, []);

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
            <Th scope="col">Bookings</Th>
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
                        userName={user?.username}
                        uid={user?.uid}
                        usersRef={usersRef}
                        bookings={user?.bookings}
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
