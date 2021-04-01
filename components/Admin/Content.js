import React from "react";
import { MDBRow } from "mdbreact";

import AdminCardSection1 from "./sections/AdminCardSection1";
import AdminCardSection2 from "./sections/AdminCardSection2";
import TableSection from "./sections/TableSection";
import BreadcrumSection from "./sections/BreadcrumSection";
import ChartSection1 from "./sections/ChartSection1";
import ChartSection2 from "./sections/ChartSection2";
// import MapSection from "./sections/MapSection";
import ModalSection from "./sections/ModalSection";
import { Button } from "react-bootstrap";
import axios from "axios";

const DashboardPage = (props) => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <AdminCardSection1
        users={props.users}
        totalBookings={props.totalBookings}
        openBookings={props.openBookings}
        ongoingBookings={props.ongoingBookings}
        closedBookings={props.closedBookings}
      />
      {/* <ChartSection1 />
      <TableSection />
      <ChartSection2 />
      <MDBRow className="mb-4">
        <MapSection />
        <ModalSection />
      </MDBRow> */}
    </div>
  );
};

export default DashboardPage;
