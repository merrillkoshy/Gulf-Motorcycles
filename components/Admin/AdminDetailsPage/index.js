import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import localforage from "localforage";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import firebase from "../../../lib/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

const AdminDetailsPage = (props) => {
  const [token, setToken] = useState("");
  const [ident, setIdent] = useState("");
  const [status, setStatus] = useState(false);
  useEffect(() => {
    localforage
      .getItem("fcm_token")
      .then(function(value) {
        setToken(value);
        firebase
          .database()
          .ref("/admin/" + "notificationRegistry/")
          .once("value", (snapshot) => {
            snapshot.forEach((snap) => {
              const userObject = snap.val();
              if (userObject.token == value) setStatus(true);
            });
          });
      })
      .catch(function(err) {
        console.log(err);
      });

    return () => {
      setStatus(false);
    };
  }, [status]);

  const registerDevice = () => {
    if (ident) {
      firebase
        .database()
        .ref("/admin/" + "notificationRegistry/" + uuidv4())
        .update({
          identification: ident,
          token: token,
        })
        .then(() => {
          toast("Succesfully registered", {
            position: "bottom-center",
            type: "success",
          });
          firebase
            .database()
            .ref("/admin/" + "notificationRegistry/")
            .once("value", (snapshot) => {
              snapshot.forEach((snap) => {
                const userObject = snap.val();
                if (userObject.token == value) setStatus(true);
              });
            });
        });
    } else {
      toast("Please add an identification text!", {
        position: "bottom-center",
        type: "error",
      });
    }
  };
  return (
    <div className="dashboard">
      <h1>Admin Details</h1>
      {!status ? (
        <div className="container">
          <div className="row pb-4">
            <div className="col">
              <a
                style={{
                  padding: "10px 0",
                }}
              >
                Register this device to receive admin notifications
              </a>
            </div>
          </div>
          <div className="row mt-100">
            <Table className="table">
              <Thead>
                <Tr>
                  <Th scope="row">Device Name</Th>
                  <Th scope="row">Device Token</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td scope="row">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter an identification text"
                      value={ident}
                      onChange={(e) => {
                        e.preventDefault();
                        setIdent(e.currentTarget.value);
                      }}
                    />
                  </Td>
                  <Td scope="row">
                    <input
                      type="text"
                      className="form-control"
                      value={token}
                      disabled
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <div className="col">
              <Button onClick={() => registerDevice()}>Register</Button>
            </div>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="container">
          <div className="row pb-4">
            Already registered to notifications list
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDetailsPage;
