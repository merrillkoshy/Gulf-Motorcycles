import moment from "moment";
import { useEffect, useState } from "react";

const Completed = (props) => {
  const [response, setResponse] = useState(null);

  const efficiencyResponse = () => {
    var a = moment(`${props?.completedDate}`, "YYYY-MM-DD");
    var b = moment(`${props?.completionDate}`, "YYYY-MM-DD");
    var days = b.diff(a, "days");
    return days > 0
      ? `${days} day(s) ahead`
      : days < 0
      ? `${Math.abs(days)} day(s) overdue`
      : days == 0
      ? `On Promised Time`
      : `Failed to retrieve dates`;
  };
  useEffect(() => {
    setResponse(efficiencyResponse());

    return () => {
      setResponse(null);
    };
  }, []);
  return (
    <div className="row">
      {/* <div className="col">{props?.bookingStatus}</div> */}
      <div className="container">
        <div className="col">
          <div className="row">
            <strong>Start Date : </strong>
          </div>
          <div className="row" style={{ color: "grey" }}>
            <div className="col">{props?.startDate}</div>
          </div>
          <div className="row">
            <strong>Estimated Completion Date: </strong>
          </div>
          <div className="row" style={{ color: "red" }}>
            <div className="col">{props?.completionDate}</div>
          </div>

          <div className="row">
            <strong>Completed Date : </strong>
          </div>
          <div className="row" style={{ color: "green" }}>
            <div className="col">{props?.completedDate}</div>
            <div className="col" style={{ color: "black" }}>
              <strong>{response}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Completed;
