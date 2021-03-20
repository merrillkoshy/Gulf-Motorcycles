import { useEffect, useState } from "react";
import firebase from "../../../lib/firebaseConfig";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import PublishedStateSwitcher from "./PublishedStateSwitcher";
import PricingAdjustor from "./PricingAdjustor";
import ServiceNameEditor from "./ServiceNameEditor";
import AddService from "./AddService";
import DeleteService from "./DeleteService";

const Services = (props) => {
  const [showForDelete, setShowForDelete] = useState(null);
  const [show, setShow] = useState(false);
  const [services, setServices] = useState([]);
  var servicesRef = firebase.database().ref("/services");

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
  };
  const headers = [
    "Item Code",
    "Item Name",
    "MRP (AED)",
    "Discount",
    "Sales Price",
    "Published",
  ];
  useEffect(() => {
    servicesList();
  }, []);
  return (
    <div className="serviceslist">
      <div className="row">
        <div className="col">
          <h1>Services</h1>
        </div>
        <div className="col" style={{ float: "right" }}>
          <button
            className="btn btn-primary"
            style={{ float: "right" }}
            onClick={() => {
              setShowForDelete(true);
            }}
          >
            <i className="icofont-minus"></i>
            <a>Delete</a>
          </button>
          <button
            className="btn btn-success"
            style={{ float: "right" }}
            onClick={() => {
              setShow(true);
            }}
          >
            <i className="icofont-plus"></i>
            <a>Add</a>
          </button>
        </div>
      </div>
      <AddService
        show={show}
        servicesRef={servicesRef}
        services={services}
        onHide={() => setShow(false)}
      />
      <DeleteService
        show={showForDelete}
        servicesRef={servicesRef}
        services={services}
        onHide={() => setShowForDelete(false)}
      />
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
          {services
            ? services.map((service, i) => {
                return (
                  <Tr key={"serve" + service?.itemCode}>
                    <Td scope="row">{service?.itemCode}</Td>
                    <Td>
                      <ServiceNameEditor
                        dbref={servicesRef}
                        itemCode={service?.itemCode}
                        serviceName={service?.itemName}
                      />
                    </Td>

                    <PricingAdjustor
                      dbref={servicesRef}
                      itemCode={service?.itemCode}
                      mrp={service?.mrp}
                      discount={service?.discount}
                    />

                    <Td
                      style={{ height: 0 }}
                      className="d-block d-lg-none d-xl-none d-xxl-none hideInMobile"
                    ></Td>
                    <Td
                      style={{ height: 0 }}
                      className="d-block d-lg-none d-xl-none d-xxl-none hideInMobile"
                    ></Td>

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
