import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import firebase from "../../../lib/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
const DeleteService = (props) => {
  const [itemCode, setItemCode] = useState(null);
  const [itemCodes, setItemCodes] = useState(["GML"]);
  const servicesRef = firebase.database().ref("/services");
  const headers = [
    "Item Code",
    "Item Name",
    "MRP (AED)",
    "Discount",
    "Sales Price",
  ];
  const servicesList = () => {
    var serviceList = [];

    servicesRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const svObject = snap.val();

          serviceList.push(svObject.itemCode);
        });
      })
      .then(() => {
        setItemCodes(serviceList);
      });
  };

  const deleteService = () => {
    firebase
      .database()
      .ref("/services/")
      .child(itemCode)
      .remove()
      .then(() => {
        var serviceList = [];
        servicesRef
          .once("value", (snapshot) => {
            snapshot.forEach((snap) => {
              const svObject = snap.val();
              serviceList.push(svObject);
            });
          })
          .then(() => {
            props?.setServices(serviceList);
          });
        toast("Service Deleted! ", {
          position: "bottom-center",
          type: "success",
        });
      });
  };

  useEffect(() => {
    servicesList();

    return () => {
      setItemCode("GML");
    };
  }, []);

  return (
    <Modal size="lg" show={props?.show} onHide={props?.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col">Item Code</div>
            <Typeahead
              id="available-codes"
              autoFocus
              onChange={(selected) => {
                setItemCode(selected[0]);
              }}
              options={itemCodes}
              placeholder="Enter item code"
            ></Typeahead>

            <Table className="table">
              <Thead>
                <Tr>
                  {headers.map((head, i) => {
                    return (
                      <Th key={`head${i}`} scope="col">
                        {head}
                      </Th>
                    );
                  })}
                </Tr>
              </Thead>

              <Tbody>
                {props?.services.map((service, i) => {
                  if (service?.itemCode == itemCode) {
                    return (
                      <Tr key={"serve" + service?.itemCode}>
                        <Td scope="row">{service?.itemCode}</Td>
                        <Td scope="row">{service?.itemName}</Td>
                        <Td scope="row">{service?.mrp}</Td>
                        <Td scope="row">{service?.discount}</Td>
                        <Td scope="row">{service?.salesPrice}</Td>
                      </Tr>
                    );
                  }
                })}
              </Tbody>
            </Table>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => {
            deleteService();
          }}
          className="btn btn-primary"
        >
          Delete Service
        </button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
};
export default DeleteService;
