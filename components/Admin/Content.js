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
  const pushAnot = () => {
    var data = JSON.stringify({
      to:
        "dSARdYhmFziBddHV-rivYu:APA91bFp-NA2MzT4dcwD-h5Qcsn562AEacQ29FcY862bH8aso_CyuA1IBsTt3c4VNoW6UzcUsi1TqLsHpDYdWTHkyuEdegyrnDz-3MfSQFImeh6sLFrnUi5-3FTYZrcwiXhEp309oTL9",
      data: {
        notification: {
          title: "Hello",
          body: "world",
        },
      },
    });

    var config = {
      method: "post",
      url: "/api/notif",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAAIN_-NbA:APA91bHnZthUE2FDpPOrc_Jx-9KXJ1_LBcHexErKLUaJdw9N2gmfaX3YQFczrlP1h8yQZ4KGSbjA2fC8BJNtMBPMbmw9yhitWZnp40jKAQ1zaC8q2rHmxXC7bLRkR9-rXWjz6IdFjhR8",
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Button onClick={pushAnot}>Notify</Button>
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
