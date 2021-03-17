import React, { useEffect, useState } from "react";
import ModalBooking from "./Modal";
const Listing = (props) => {
  const [show, setShow] = useState(false);
  const [bookRef, setBookRef] = useState(null);
  return Object.values(props?.bookings).map((book, i) => {
    return (
      <>
        <div className="booking-wrapper" key={i + book.refId}>
          <span
            className={`badge badge-${
              book?.bookingStatus == "open"
                ? "success"
                : book?.bookingStatus == "ongoing"
                ? "warning"
                : "secondary"
            }`}
          >
            {book?.bookingStatus.charAt(0).toUpperCase() +
              book?.bookingStatus.substring(1)}
          </span>
          <a
            onClick={(e) => {
              setBookRef(props?.bookings[e.currentTarget.innerHTML]);
              setShow(true);
            }}
            className="ref"
          >
            {book.refId}
          </a>
        </div>
        <ModalBooking
          show={show}
          username={props.userName}
          uid={props.uid}
          usersRef={props.usersRef}
          onHide={() => setShow(false)}
          bookingDetails={bookRef}
        />
      </>
    );
  });
};
export default Listing;
