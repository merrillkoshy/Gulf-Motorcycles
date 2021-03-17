import moment from "moment";
import { useState } from "react";
import Switch from "react-switch";

const Ongoing = (props) => {
  const [status, setStatus] = useState(false);
  const [display, setDisplay] = useState("none");

  const handleSave = () => {
    if (status) {
      props?.dbref.child(`/${props?.uid}/bookings/${props?.refId}`).update({
        bookingStatus: "completed",
        completedDate: moment().format("YYYY-MM-DD"),
      });
      props.setBookingStatus("completed");
    }
  };

  return (
    <>
      <div className="row">
        {/* <div className="col">{props?.bookingStatus}</div> */}
        <div className="container">
          <div className="col">
            <div className="row">
              <strong>Start Date : </strong>
            </div>
            <div className="row" style={{ color: "green" }}>
              <div className="col">{props?.startDate}</div>
            </div>

            <div className="row">
              <strong>Completion Date(Est) : </strong>
            </div>
            <div className="row" style={{ color: "red" }}>
              <div className="col">{props?.completionDate}</div>
              <div className="col">
                {"Deadline " + moment(props?.completionDate).fromNow()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">Mark as Completed</div>
        <div className="col">
          <label>
            <Switch
              onChange={() => {
                setStatus(!status);
                if (display != "block") {
                  setDisplay("block");
                }
              }}
              checked={status}
            />
          </label>
        </div>
      </div>
      <div className={`d-${display} col w-100 text-center`}>
        <button onClick={handleSave} className="btn btn-primary">
          Save
        </button>
      </div>
    </>
  );
};
export default Ongoing;
