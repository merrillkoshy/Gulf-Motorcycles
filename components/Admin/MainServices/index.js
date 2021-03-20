import { useEffect, useState } from "react";
import firebase from "../../../lib/firebaseConfig";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import PricingAdjustor from "./PricingAdjustor";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
const MainServices = () => {
  const [services, setServices] = useState([]);
  var servicesRef = firebase.database().ref("/mainServices");

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

  useEffect(() => {
    servicesList();
  }, []);

  return (
    <div className="main-services-list">
      <h1>Services</h1>
      <Table className="table ">
        <Thead>
          <Tr>
            <Th scope="col">#</Th>
            <Th scope="col">Service Name</Th>
            <Th scope="col">Sales Price (AED)</Th>
            <Th scope="col">Services Included</Th>
          </Tr>
        </Thead>
        <Tbody>
          {services
            ? services.map((service, i) => {
                return (
                  <Tr key={"serve" + i}>
                    <Th scope="row">{i}</Th>
                    <Td className={"serviceName"}>{service?.serviceName}</Td>
                    <PricingAdjustor
                      dbref={servicesRef}
                      serviceName={service?.serviceName}
                      salesPrice={service?.salesPrice}
                    />
                    <Td>
                      {service?.services.map((service, i) => {
                        return (
                          <Accordion key={`accord${i}`}>
                            <Card>
                              <Accordion.Toggle
                                as={Card.Header}
                                eventKey={`${i}`}
                              >
                                {service?.itemName}
                                <i
                                  className="icofont-rounded-down"
                                  style={{ float: "right" }}
                                ></i>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey={`${i}`}>
                                <Card.Body>
                                  <ul>
                                    <li>Item Code : {service?.itemCode}</li>
                                    <li>Item Name : {service?.itemName}</li>
                                    <li>MRP : AED {service?.mrp}</li>
                                    <li>Discount : AED {service?.discount}</li>
                                    <li className="pricing">
                                      Sales Price : AED {service?.salesPrice}
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        );
                      })}
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
export default MainServices;
