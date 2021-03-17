import { useState } from "react";
import Switch from "react-switch";

const PublishedStateSwitcher = (props) => {
  const [publishedState, setPublishedState] = useState(props?.published);
  return publishedState != undefined ? (
    <label>
      <Switch
        onChange={() => {
          props?.dbref
            .child(`/${props?.itemCode}`)
            .update({ published: !props?.published });
          setPublishedState(!publishedState);
        }}
        checked={publishedState}
      />
    </label>
  ) : (
    "loading"
  );
};

export default PublishedStateSwitcher;
