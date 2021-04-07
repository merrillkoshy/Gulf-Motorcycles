import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from "mdbreact";
import { Line } from "react-chartjs-2";
import moment from "moment";

const RevenueChart = (props) => {
  // useEffect(() => {
  //   effect
  //   return () => {
  //     //
  //   }
  // }, [])

  //Get Years
  const years = [
    ...new Set(
      props?.totalRevenue?.map((date) => {
        return parseInt(moment(date.completedDate).format("Y"));
      })
    ),
  ];

  //Completed Dates
  const monthsData = props?.totalRevenue?.map((date) => {
    return parseInt(moment(date.completedDate).format("M"));
  });
  const dataArrayClosed = new Array(12).fill(0);
  props?.totalRevenue?.map((pack) => {
    return monthsData.map((month) => {
      if (parseInt(moment(pack.completedDate).format("M")) === month) {
        var bundler = 0;
        bundler = bundler + pack.amount;
        return (dataArrayClosed[month - 1] = bundler);
      }
    });
  });

  const allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dataLine = {
    labels: allMonths,
    datasets: [
      {
        label: "Amount (AED)",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#228B2280",
        borderColor: "#228B22",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#424242",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataArrayClosed,
      },
    ],
  };

  return (
    <MDBRow className="ptb-4">
      <MDBCol md="12" lg="6" className="mb-4">
        {years &&
          years.map((year, i) => {
            return (
              <MDBCard key={i + "yearkey" + year} className="mb-4">
                <MDBCardHeader>
                  Year {year}-{year + 1}
                </MDBCardHeader>
                <MDBCardBody>
                  <Line data={dataLine} options={{ responsive: true }} />
                </MDBCardBody>
              </MDBCard>
            );
          })}
      </MDBCol>
    </MDBRow>
  );
};

export default RevenueChart;
