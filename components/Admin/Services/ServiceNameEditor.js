import { useState } from "react";
import { Td } from "react-super-responsive-table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const ServiceNameEditor = (props) => {
  const [serviceName, setServiceName] = useState(props?.serviceName);
  const [show, setShow] = useState("none");
  const saveInDb = () => {
    props?.dbref
      .child(`/${props?.itemCode}`)
      .update({ itemName: serviceName })
      .then(() => {
        setShow("none");
      });
  };
  return (
    <>
      <OverlayTrigger
        key={"right"}
        placement={"right"}
        overlay={<Tooltip id={`tooltip-right`}>{serviceName}</Tooltip>}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter Service Name"
          style={{ color: "#000000" }}
          value={serviceName}
          onChange={(e) => {
            e.preventDefault();
            if (show != "block") {
              setShow("block");
            }
            setServiceName(e.currentTarget.value);
          }}
        />
      </OverlayTrigger>
      <Td className={`d-${show}`}>
        <div className="col">
          <button className={`btn btn-primary`} onClick={() => saveInDb()}>
            Save
          </button>
        </div>
      </Td>
    </>
  );
};
export default ServiceNameEditor;
