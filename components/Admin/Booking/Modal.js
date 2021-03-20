import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import BookingStatusSwitcher from "./BookingStatusSwitcher";

const ModalBooking = (props) => {
  const book = props?.bookingDetails;

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
            {book?.bookingStatus.charAt(0).toUpperCase() +
              book?.bookingStatus.substring(1)}
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
                <Td scope="col">{book?.bookingStatus}</Td>
              </Tr>
            </Tbody>
          </Table>
          <BookingStatusSwitcher
            dbref={props?.usersRef}
            uid={props?.uid}
            refId={book?.refId}
            bookingStatus={book?.bookingStatus}
            startDate={book?.startDate}
            completionDate={book?.completionDate}
            completedDate={book?.completedDate}
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
