import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import BookingStatusSwitcher from "./BookingStatusSwitcher";

const ModalBooking = (props) => {
  const book = props?.bookingDetails;
  const [status, setStatus] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    setStatus(props?.bookingDetails?.bookingStatus);
  }, []);
  const selectThisTimeSlot = (slot) => {
    setSelectedSlot(slot);
  };
  const timeSlotArrays = [
    "9-10 AM",
    "10-11 AM",
    "11-12 AM",
    "12-1 PM",
    "2-3 PM",
    "3-4 PM",
    "4-5 PM",
    "5-6 PM",
  ];
  const API_KEY = "AIzaSyCRS2BbreEHgILY64uHmkmfV8jK-oldGA4";
  return (
    <Modal size="lg" show={props?.show} onHide={props?.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span
            className={`badge badge-${
              book?.bookingStatus == "open"
                ? "success"
                : book?.bookingStatus == "ongoing"
                ? "warning"
                : "secondary"
            } `}
          >
            {status ? status : props?.bookingDetails?.bookingStatus}
          </span>
          Ref Id: {book?.refId} | {book?.serviceName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="jobcard">
          <Table className="table modal-table">
            <Thead>
              <Tr>
                <Th scope="col">Name</Th>
                <Th scope="col">Address</Th>
                <Th scope="col">Service Name</Th>
                <Th scope="col">Vehicle Name</Th>
                <Th scope="col">Pick and Drop</Th>
                <Th scope="col">Service Charge</Th>
                <Th scope="col">Booking Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td scope="col">{props?.username}</Td>
                <Td scope="col">{book?.address}</Td>
                <Td scope="col">{book?.serviceName}</Td>
                <Td scope="col">{book?.vehicleName}</Td>
                <Td scope="col">{book?.pickAndDrop ? "Yes" : "No"}</Td>
                <Td scope="col">{book?.serviceCharge}</Td>
                <Td scope="col">
                  {status ? status : props?.bookingDetails?.bookingStatus}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <div className="container mb-5">
            {book?.pickAndDrop && (
              <div className="row">
                <div className="col-2">Pickup Slot</div>
                <div className="col">
                  <div className="row">
                    {timeSlotArrays.map((slot, i) => {
                      return (
                        <div
                          key={slot + i}
                          className={`${
                            book?.timeSlot == slot ? "picked" : null
                          } ${
                            selectedSlot == slot ? "overridden" : null
                          } timeslot col`}
                          onClick={() => {
                            if (book?.timeSlot != slot)
                              selectThisTimeSlot(slot);
                          }}
                        >
                          {slot}
                        </div>
                      );
                    })}
                  </div>
                  {selectedSlot && (
                    <div className="row mt-5">
                      You have overridden user-selected time slot.
                      <a
                        style={{
                          textDecoration: "underline",
                          color: "#FF2800",
                          cursor: "pointer",
                          marginLeft: 5,
                        }}
                        onClick={() => setSelectedSlot(null)}
                      >
                        Undo
                      </a>
                    </div>
                  )}
                  <div className="row mt-5">
                    <iframe
                      width="500"
                      height="170"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${book?.coordsDetected?.latitude},${book?.coordsDetected?.longitude}&zoom=18" allowfullscreen`}
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>

          <BookingStatusSwitcher
            dbref={props?.usersRef}
            uid={props?.uid}
            refId={book?.refId}
            bookingStatus={book?.bookingStatus}
            startDate={book?.startDate}
            completionDate={book?.completionDate}
            completedDate={book?.completedDate}
            usersList={props?.usersList}
            setStatus={setStatus}
            bookedSlot={book?.timeSlot}
            selectedSlot={selectedSlot}
            onHide={props?.onHide}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props?.onHide} className="btn btn-primary">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBooking;
