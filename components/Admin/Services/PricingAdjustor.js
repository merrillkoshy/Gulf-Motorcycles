import { useEffect, useState } from "react";
import { Td } from "react-super-responsive-table";
const PricingAdjustor = (props) => {
  const [mrp, setMrp] = useState(props?.mrp);
  const [discount, setDiscount] = useState(props?.discount);
  const [show, setShow] = useState("none");
  useEffect(() => {
    return () => {
      setMrp(props?.mrp);
      setDiscount(props?.discount);
      setShow("none");
    };
  }, []);
  const saveInDb = () => {
    props?.dbref
      .child(`/${props?.itemCode}`)
      .update({ mrp: mrp, discount: discount, salesPrice: mrp - discount })
      .then(() => {
        setShow("none");
      });
  };
  return (
    <>
      <Td>
        <input
          type="number"
          className="form-control"
          placeholder="Enter new price"
          min={1}
          value={mrp}
          onChange={(e) => {
            e.preventDefault();
            if (show != "block") {
              setShow("block");
            }
            setMrp(e.currentTarget.value);
          }}
        />
      </Td>
      <Td>
        <input
          type="number"
          className="form-control"
          placeholder="Enter discount"
          value={discount}
          min={0}
          max={mrp ? mrp - 1 : 100}
          onChange={(e) => {
            e.preventDefault();
            if (show != "block") {
              setShow("block");
            }
            setDiscount(e.currentTarget.value);
          }}
        />
      </Td>
      <Td>
        <div className="row">
          <div className="col">
            <strong>{mrp - discount}</strong>
          </div>
          <div className="col">
            <button
              className={`d-${show} btn btn-primary`}
              onClick={() => saveInDb()}
            >
              Save
            </button>
          </div>
        </div>
      </Td>
    </>
  );
};

export default PricingAdjustor;
