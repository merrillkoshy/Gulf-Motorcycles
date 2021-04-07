import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from "mdbreact";
import { Line, Doughnut, Radar } from "react-chartjs-2";
import moment from "moment";

const ChartSection2 = (props) => {
  //Get Years
  const years = [
    ...new Set(
      [
        ...new Set(
          props?.startDates?.map((date) => {
            return parseInt(moment(date).format("Y"));
          })
        ),
      ],
      [
        ...new Set(
          props?.completedDates?.map((date) => {
            return parseInt(moment(date).format("Y"));
          })
        ),
      ]
    ),
  ];

  //Open Booking Dates
  const openDatesData = props?.startDates?.map((date) => {
    return parseInt(moment(date).format("M"));
  });
  const monthsRecordedOpen = [...new Set(openDatesData)];

  const dataArrayOpen = new Array(12).fill(0);
  monthsRecordedOpen.map((month) => {
    return (dataArrayOpen[month - 1] = openDatesData?.reduce(
      (n, x) => n + (x === month),
      0
    ));
  });

  //Completed Dates
  const completedDatesData = props?.completedDates?.map((date) => {
    return parseInt(moment(date).format("M"));
  });
  const monthsRecorded = [...new Set(completedDatesData)];

  const dataArrayClosed = new Array(12).fill(0);
  monthsRecorded.map((month) => {
    return (dataArrayClosed[month - 1] = completedDatesData?.reduce(
      (n, x) => n + (x === month),
      0
    ));
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
        label: "Completed Jobs",
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
      {
        label: "Jobs Commited",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#FF280080",
        borderColor: "#FF2800",
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
        data: dataArrayOpen,
      },
    ],
  };

  // const dataRadar = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //   datasets: [
  //     {
  //       label: "#1",
  //       backgroundColor: "rgba(245, 74, 85, 0.5)",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //     },
  //     {
  //       label: "#2",
  //       backgroundColor: "rgba(90, 173, 246, 0.5)",
  //       data: [12, 42, 121, 56, 24, 12, 2],
  //     },
  //     {
  //       label: "#3",
  //       backgroundColor: "rgba(245, 192, 50, 0.5)",
  //       data: [2, 123, 154, 76, 54, 23, 5],
  //     },
  //   ],
  // };

  //   const dataDoughnut = {
  //     labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
  //     datasets: [
  //       {
  //         data: [300, 50, 100, 40, 120],
  //         backgroundColor: [
  //           "#F7464A",
  //           "#46BFBD",
  //           "#FDB45C",
  //           "#949FB1",
  //           "#4D5360",
  //         ],
  //         hoverBackgroundColor: [
  //           "#FF5A5E",
  //           "#5AD3D1",
  //           "#FFC870",
  //           "#A8B3C5",
  //           "#616774",
  //         ],
  //       },
  //     ],
  //   };

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
      {/* <MDBCol md="12" lg="4" className="mb-4">
                    <MDBCard className="mb-4">
                    <MDBCardHeader>Radar chart</MDBCardHeader>
                    <MDBCardBody>
                        <Radar data={dataRadar}  height={300} options={{responsive: true }} />
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol> */}
      {/* <MDBCol md="12" lg="4" className="mb-4">
        <MDBCard className="mb-4">
          <MDBCardHeader>Doughnut chart</MDBCardHeader>
          <MDBCardBody>
            <Doughnut
              data={dataDoughnut}
              height={300}
              options={{ responsive: true }}
            />
          </MDBCardBody>
        </MDBCard>
      </MDBCol> */}
    </MDBRow>
  );
};

export default ChartSection2;
