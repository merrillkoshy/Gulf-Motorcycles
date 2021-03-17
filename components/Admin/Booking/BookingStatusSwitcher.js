import { useState, useEffect } from "react";
import Switch from "react-switch";

import Ongoing from "./statusSwitchers/Ongoing";
import Completed from "./statusSwitchers/Completed";

const BookingStatusSwitcher = (props) => {
  const [status, setStatus] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(props?.bookingStatus);
  const [display, setDisplay] = useState("none");
  const [date, setDate] = useState(null);
  const [completionDate, setCompletionDate] = useState(null);
  useEffect(() => {
    return () => {
      setBookingStatus(props?.bookingStatus);
      setDisplay("none");
      setStatus(false);
    };
  }, [bookingStatus]);

  const handleSave = () => {
    if (status) {
      props?.dbref.child(`/${props?.uid}/bookings/${props?.refId}`).update({
        bookingStatus: "ongoing",
        startDate: date,
        completionDate: completionDate,
      });
      setBookingStatus("ongoing");
    } else {
      props?.dbref
        .child(`/${props?.uid}/bookings/${props?.refId}`)
        .update({ bookingStatus: "open" });
      setBookingStatus("open");
    }
  };

  const byStatus = (val) => {
    switch (val) {
      case "open":
        return (
          <div className="row">
            <div className="col">Accept</div>
            <div className="col">
              <label>
                <Switch
                  onChange={() => {
                    setStatus(!status);
                    if (display != "block") {
                      setDisplay("block");
                    } else {
                      setDisplay("none");
                    }
                  }}
                  checked={status}
                />
              </label>
            </div>
            <div className={`d-${display} col w-100 text-center`}>
              <div className="row mt-2">
                Start Date
                <input
                  className="form-control mt-2"
                  type="date"
                  onChange={(e) => {
                    e.preventDefault();
                    setDate(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="row mt-2">
                Estimated Date of Completion
                <input
                  className="form-control mt-2"
                  type="date"
                  onChange={(e) => {
                    e.preventDefault();
                    setCompletionDate(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="col mt-3">
                <button onClick={handleSave} className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        );

        break;
      case "ongoing":
        return (
          <Ongoing
            bookingStatus={props?.bookingStatus}
            startDate={props?.startDate}
            completionDate={props?.completionDate}
            setBookingStatus={setBookingStatus}
          />
        );
        break;
      case "closed":
        return (
          <Completed
            bookingStatus={props?.bookingStatus}
            startDate={props?.startDate}
            completionDate={props?.completionDate}
            completedDate={props?.completedDate}
          />
        );
        break;
      default:
        break;
    }
  };
  return bookingStatus != undefined ? (
    byStatus(props?.bookingStatus)
  ) : (
    <div>loading</div>
  );
};

export default BookingStatusSwitcher;
