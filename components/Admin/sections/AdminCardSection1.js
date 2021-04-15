import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCardText,
} from "mdbreact";

const AdminCardSection1 = (props) => {
  const [maxVal, setMaxVal] = useState(20);

  return (
    <>
      <div className="row">
        <div className="col col-lg-3 col-xl-3 col-xxl-3">
          Max Value For Analysis
        </div>
        <div className="col col-lg-3 col-xl-3 col-xxl-3">
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter number"
              value={maxVal}
              onChange={(e) => {
                e.preventDefault();
                setMaxVal(e.currentTarget.value);
              }}
            />
          </div>
        </div>
      </div>
      <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard
            style={{
              borderRadius: 20,
              padding: 10,
              boxShadow: "-1px 3px 8px #0000003d",
            }}
            className="cascading-admin-card"
          >
            <div className="admin-up">
              <MDBIcon icon="money-bill-alt" className="primary-color" />
              <div className="data">
                <p>TOTAL USERS</p>
                <h4>
                  <strong>{props.users?.length}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div
                style={{
                  borderRadius: 20,
                  boxShadow: "-1px 3px 8px #0000003d",
                }}
                className="progress"
              >
                <div
                  aria-valuemax={maxVal}
                  aria-valuemin="0"
                  aria-valuenow={props.users?.length}
                  className="progress-bar bg-main"
                  role="progressbar"
                  style={{
                    borderRadius: 20,
                    boxShadow: "-1px 3px 8px #0000003d",
                    width:
                      props.users?.length != 0
                        ? (props.users?.length / maxVal) * 100 + "%"
                        : 0,
                  }}
                ></div>
              </div>
              {/* <MDBCardText>Better than last week (25%)</MDBCardText> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard
            style={{
              borderRadius: 20,
              padding: 10,
              boxShadow: "-1px 3px 8px #0000003d",
            }}
            className="cascading-admin-card"
          >
            <div className="admin-up">
              <MDBIcon icon="chart-line" className="warning-color" />
              <div className="data">
                <p>TOTAL BOOKINGS</p>
                <h4>
                  <strong>{props?.totalBookings}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div
                style={{
                  borderRadius: 20,
                  boxShadow: "-1px 3px 8px #0000003d",
                }}
                className="progress"
              >
                <div
                  aria-valuemax={maxVal}
                  aria-valuemin="0"
                  aria-valuenow={props?.totalBookings}
                  className="progress-bar bg grey"
                  role="progressbar"
                  style={{
                    borderRadius: 20,
                    boxShadow: "-1px 3px 8px #0000003d",
                    width:
                      props?.totalBookings != 0
                        ? (props?.totalBookings / maxVal) * 100 + "%"
                        : 0,
                  }}
                ></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard
            style={{
              borderRadius: 20,
              padding: 10,
              boxShadow: "-1px 3px 8px #0000003d",
            }}
            className="cascading-admin-card"
          >
            <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1" />
              <div className="data">
                <p>OPEN BOOKINGS</p>
                <h4>
                  <strong>{props?.openBookings}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div
                style={{
                  borderRadius: 20,
                  boxShadow: "-1px 3px 8px #0000003d",
                }}
                className="progress"
              >
                <div
                  aria-valuemax={maxVal}
                  aria-valuemin="0"
                  aria-valuenow={props?.openBookings}
                  className="progress-bar bg grey"
                  role="progressbar"
                  style={{
                    borderRadius: 20,
                    boxShadow: "-1px 3px 8px #0000003d",
                    width:
                      props?.openBookings != 0
                        ? (props?.openBookings / maxVal) * 100 + "%"
                        : 0,
                  }}
                ></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard
            style={{
              borderRadius: 20,
              padding: 10,
              boxShadow: "-1px 3px 8px #0000003d",
            }}
            className="cascading-admin-card"
          >
            <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1" />
              <div className="data">
                <p>ONGOING BOOKINGS</p>
                <h4>
                  <strong>{props?.ongoingBookings}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div
                style={{
                  borderRadius: 20,
                  boxShadow: "-1px 3px 8px #0000003d",
                }}
                className="progress"
              >
                <div
                  aria-valuemax={maxVal}
                  aria-valuemin="0"
                  aria-valuenow={props?.ongoingBookings}
                  className="progress-bar bg grey"
                  role="progressbar"
                  style={{
                    borderRadius: 20,
                    boxShadow: "-1px 3px 8px #0000003d",
                    width:
                      props?.ongoingBookings != 0
                        ? (props?.ongoingBookings / maxVal) * 100 + "%"
                        : 0,
                  }}
                ></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard
            style={{
              borderRadius: 20,
              padding: 10,
              boxShadow: "-1px 3px 8px #0000003d",
            }}
            className="cascading-admin-card"
          >
            <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1" />
              <div className="data">
                <p>CLOSED BOOKINGS</p>
                <h4>
                  <strong>{props?.closedBookings}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div
                style={{
                  borderRadius: 20,
                  boxShadow: "-1px 3px 8px #0000003d",
                }}
                className="progress"
              >
                <div
                  aria-valuemax={maxVal}
                  aria-valuemin="0"
                  aria-valuenow={props?.closedBookings}
                  className="progress-bar bg grey"
                  role="progressbar"
                  style={{
                    borderRadius: 20,
                    boxShadow: "-1px 3px 8px #0000003d",
                    width:
                      props?.closedBookings != 0
                        ? (props?.closedBookings / maxVal) * 100 + "%"
                        : 0,
                  }}
                ></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default AdminCardSection1;
