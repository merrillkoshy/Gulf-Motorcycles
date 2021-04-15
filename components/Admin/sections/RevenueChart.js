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
  const compactedMonths = [...new Set(monthsData)];
  const arrayLimit = compactedMonths[0];
  const dataArrayClosed = new Array(arrayLimit).fill(0);
  props?.totalRevenue?.map((pack) => {
    var monthNumber = parseInt(moment(pack.completedDate).format("M"));
    dataArrayClosed[monthNumber - 1] == 0
      ? (dataArrayClosed[monthNumber - 1] = pack.amount)
      : (dataArrayClosed[monthNumber - 1] =
          dataArrayClosed[monthNumber - 1] + pack.amount);
    return dataArrayClosed;
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
    labels: allMonths.slice(0, arrayLimit),
    datasets: [
      {
        label: "Revenue (AED)",
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
    <>
      <MDBCol md="12" lg="10" className="mx-auto mb-4">
        {years &&
          years.map((year, i) => {
            return (
              <MDBCard
                style={{
                  borderRadius: 20,
                  boxShadow: "-1px 3px 8px #0000003d",
                }}
                key={i + "yearkey" + year}
                className="mb-4"
              >
                <MDBCardHeader>
                  <strong>
                    Year {year}-{year + 1}
                  </strong>
                </MDBCardHeader>
                <MDBCardBody>
                  <Line data={dataLine} options={{ responsive: true }} />
                </MDBCardBody>
              </MDBCard>
            );
          })}
      </MDBCol>
    </>
  );
};

export default RevenueChart;
