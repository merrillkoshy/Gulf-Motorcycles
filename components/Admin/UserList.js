import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const UserList = (props) => {
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [status, setStatus] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(props.users);
  }, []);
  return (
    <div className="userslist">
      <h1>Users</h1>
      <Table className="table ">
        <Thead>
          <Tr>
            <Th scope="col">#</Th>
            <Th scope="col">Name</Th>
            <Th scope="col">Address</Th>
            <Th scope="col">Email</Th>
            <Th scope="col">Phone Number</Th>
            <Th scope="col">Last Updated</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users
            ? users.map((user, i) => {
                return (
                  <Tr key={user.uid}>
                    <Th scope="row">{i + 1}</Th>
                    <Td>{user?.username}</Td>
                    <Td>{user?.address}</Td>
                    <Td>{user?.email}</Td>
                    <Td>{user?.phoneNumber}</Td>
                    <Td>{`${new Date(user?.lastModified).toString()}`}</Td>
                  </Tr>
                );
              })
            : null}
        </Tbody>
      </Table>
    </div>
  );
};
export default UserList;
