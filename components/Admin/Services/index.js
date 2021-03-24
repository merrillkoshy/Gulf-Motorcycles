import { useEffect, useState } from "react";
import firebase from "../../../lib/firebaseConfig";

//Presentation
import Pagination from "react-bootstrap/Pagination";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

// Components
import PublishedStateSwitcher from "./PublishedStateSwitcher";
import PricingAdjustor from "./PricingAdjustor";
import ServiceNameEditor from "./ServiceNameEditor";
import AddService from "./AddService";
import DeleteService from "./DeleteService";

const Services = (props) => {
  const [showForDelete, setShowForDelete] = useState(null);
  const [show, setShow] = useState(false);
  const [services, setServices] = useState([]);
  const [displayedServices, setDisplayedServices] = useState([]);
  const [activePage, setActivePage] = useState(1);

  var servicesRef = firebase.database().ref("/services");
  const limit = 10;
  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);
  var serviceLister = [];
  const servicesList = () => {
    servicesRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const svObject = snap.val();
          serviceLister.push(svObject);
        });
      })
      .then(() => {
        setServices(serviceLister);
        setDisplayedServices(serviceLister.slice(0, limit));
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
    return () => {
      setActivePage(1);
    };
  }, []);
  return (
    <div className="serviceslist">
      <div className="row mast">
        <div className="col">
          <h1>Services</h1>
        </div>
        <div className="col d-none d-lg-block d-xl-block d-xxl-block">
          <Pagination>
            <Pagination.Prev
              onClick={() => {
                if (activePage >= 2) {
                  setActivePage(activePage - 1);

                  setDisplayedServices(
                    services.slice(
                      limit * (activePage - 2),
                      limit * (activePage - 1)
                    )
                  );
                }
              }}
            />
            {range(1, limit + 1).map((index, i) => {
              return (
                <>
                  <Pagination.Item
                    key={index}
                    active={activePage === index}
                    onClick={() => {
                      setActivePage(index);

                      setDisplayedServices(
                        services.slice(limit * i, limit * index)
                      );
                    }}
                  >
                    {index}
                  </Pagination.Item>
                </>
              );
            })}

            <Pagination.Next
              onClick={() => {
                if (activePage <= limit) {
                  setActivePage(activePage + 1);
                  setDisplayedServices(
                    services.slice(limit * activePage, limit * (activePage + 1))
                  );
                }
              }}
            />
          </Pagination>
        </div>
        <div className="col d-lg-none d-xl-none d-xxl-none d-md-block d-xs-block d-sm-block">
          <Pagination>
            <Pagination.Prev
              onClick={() => {
                if (activePage >= 2) {
                  setActivePage(activePage - 1);
                  setDisplayedServices(
                    services.slice(
                      limit * (activePage - 2),
                      limit * (activePage - 1)
                    )
                  );
                }
              }}
            />
            {
              <input
                type="number"
                className="form-control"
                placeholder="Page"
                min={1}
                max={limit}
                style={{ height: "initial", padding: "0 8%", width: "auto" }}
                value={activePage}
                onChange={(e) => {
                  e.preventDefault();
                  setActivePage(e.currentTarget.value);
                  setDisplayedServices(
                    services.slice(
                      limit * (e.currentTarget.value - 1),
                      limit * e.currentTarget.value
                    )
                  );
                }}
              />
            }
            <div
              style={{
                height: "auto",
                margin: "0 4px",
                alignSelf: "center",
              }}
            >
              {" / " + (limit + 1)}
            </div>

            <Pagination.Next
              onClick={() => {
                if (activePage <= limit) {
                  setActivePage(activePage + 1);
                  setDisplayedServices(
                    services.slice(limit * activePage, limit * (activePage + 1))
                  );
                }
              }}
            />
          </Pagination>
        </div>
        <div className="col" style={{ float: "right" }}>
          <button
            className="btn btn-primary"
            style={{ float: "right", padding: "7px 10px" }}
            onClick={() => {
              setShowForDelete(true);
            }}
          >
            <i className="icofont-minus"></i>
            <a>Delete</a>
          </button>
          <button
            className="btn btn-success"
            style={{ float: "right", padding: "7px 10px" }}
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
        setServices={setServices}
        onHide={() => setShow(false)}
      />
      <DeleteService
        show={showForDelete}
        servicesRef={servicesRef}
        services={services}
        setServices={setServices}
        onHide={() => setShowForDelete(false)}
      />

      <div className="d-flex justify-content-between">
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
            {displayedServices
              ? displayedServices.map((service, i) => {
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
                        style={{ height: 0, padding: 0 }}
                        className="d-block d-lg-none d-xl-none d-xxl-none hideInMobile"
                      ></Td>
                      <Td
                        style={{ height: 0, padding: 0 }}
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
    </div>
  );
};
export default Services;
