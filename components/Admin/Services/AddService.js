import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import firebase from "../../../lib/firebaseConfig";

const AddService = (props) => {
  const [itemCode, setItemCode] = useState("GML");
  const [itemName, setItemName] = useState("");
  const [mrp, setMrp] = useState("");

  const saveInDb = () => {
    firebase
      .database()
      .ref("/services/" + itemCode)
      .set({
        itemCode: itemCode,
        itemName: itemName,
        mrp: mrp,
        discount: 0,
        salesPrice: mrp,
        published: false,
      })
      .then(() => {
        var serviceList = [];
        firebase
          .database()
          .ref("/services")
          .once("value", (snapshot) => {
            snapshot.forEach((snap) => {
              const svObject = snap.val();

              serviceList.push(svObject);
            });
          })
          .then(() => {
            props?.setServices(serviceList);
          });
        toast("Service registered! ", {
          position: "bottom-center",
          type: "success",
        });
      });
  };

  const addService = () => {
    var checkVariable = 0;
    if (itemCode.length === 6) {
      props?.services.map((service) => {
        if (service.itemCode == itemCode) {
          return (checkVariable = 1);
        }
      });
      if (checkVariable == 0) {
        saveInDb();
      } else {
        toast("Item Code already registered", {
          position: "bottom-center",
          type: "error",
        });
      }
    } else {
      toast("Character count not fulfilled.", {
        position: "bottom-center",
        type: "error",
      });
    }
  };

  useEffect(() => {
    return () => {
      setItemCode("GML");
    };
  }, []);
  return (
    <Modal size="lg" show={props?.show} onHide={props?.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col">Item Code</div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Item Code"
              style={{ color: "#000000", textTransform: "uppercase" }}
              value={itemCode}
              onChange={(e) => {
                e.preventDefault();
                //   if (show != "block") {
                //     setShow("block");
                //   }
                setItemCode(e.currentTarget.value);
              }}
            />
          </div>
          <div className="row">
            <div className="col">Item Name</div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Item Name"
              style={{ color: "#000000" }}
              value={itemName}
              onChange={(e) => {
                e.preventDefault();
                //   if (show != "block") {
                //     setShow("block");
                //   }
                setItemName(e.currentTarget.value);
              }}
            />
          </div>
          <div className="row">
            <div className="col">MRP (AED)</div>
            <input
              type="number"
              className="form-control"
              placeholder="Enter MRP"
              style={{ color: "#000000" }}
              value={mrp}
              onChange={(e) => {
                e.preventDefault();
                //   if (show != "block") {
                //     setShow("block");
                //   }
                setMrp(e.currentTarget.value);
              }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => {
            addService();
          }}
          className="btn btn-primary"
        >
          Add Service
        </button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
};
export default AddService;
