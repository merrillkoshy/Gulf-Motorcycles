import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";

const FilterModal = (props) => {
  const [checkedVal, setCheckedVal] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    setStatus(props?.bookingDetails?.bookingStatus);
  }, []);

  const selectedValue = (e) => {
    props?.filterUsers(e.currentTarget.value.toLowerCase());
    setCheckedVal(e.currentTarget.value);
    props?.onHide();
  };
  return (
    <Modal size={"sm"} show={props?.show} centered onHide={props?.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Filter By Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-form-container">
          {props?.params?.map((param, i) => {
            return (
              <div key={`${param}-${i}`} className="modal-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value={param}
                  checked={checkedVal === param}
                  name={`${param}-option`}
                  id={`${param}-option`}
                  onChange={selectedValue}
                />
                <label className="form-check-label" htmlFor={`${param}-option`}>
                  {param}
                </label>
              </div>
            );
          })}
          {props?.currentKey && (
            <div className="container">
              <div className="">Current Filter : {props?.currentKey}</div>
              <a className="hollowButton" onClick={props?.reset}>
                <i className="icofont-delete" /> Clear
              </a>
            </div>
          )}
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
export default FilterModal;
