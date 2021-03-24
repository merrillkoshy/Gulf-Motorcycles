import React, { useEffect, useState } from "react";
import ModalBooking from "./Modal";
const Listing = (props) => {
  const [show, setShow] = useState(false);
  const [bookRef, setBookRef] = useState(null);

  return Object.values(props?.bookings).map((book, i) => {
    return (
      <div key={i + book.refId}>
        <div className="booking-wrapper">
          <span
            className={`badge badge-${
              book?.bookingStatus == "open"
                ? "success"
                : book?.bookingStatus == "ongoing"
                ? "warning"
                : "secondary"
            }`}
          >
            {book?.bookingStatus}
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
          usersList={props?.usersList}
          bookingDetails={bookRef}
        />
      </div>
    );
  });
};
export default Listing;
