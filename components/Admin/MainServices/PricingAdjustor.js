import { useEffect, useState } from "react";
import { Td } from "react-super-responsive-table";
const PricingAdjustor = (props) => {
  const [salesPrice, setSalesPrice] = useState(props?.salesPrice);
  const [show, setShow] = useState("none");
  useEffect(() => {
    return () => {
      setSalesPrice(props?.discount);
      setShow("none");
    };
  }, []);
  const saveInDb = () => {
    props?.dbref
      .child(`/${props?.serviceName}`)
      .update({ salesPrice: salesPrice })
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
          value={salesPrice}
          onChange={(e) => {
            e.preventDefault();
            if (show != "block") {
              setShow("block");
            }
            setSalesPrice(e.currentTarget.value);
          }}
        />
        <div className="col">
          <button
            className={`d-${show} btn btn-primary`}
            onClick={() => saveInDb()}
          >
            Save
          </button>
        </div>
      </Td>
    </>
  );
};

export default PricingAdjustor;
