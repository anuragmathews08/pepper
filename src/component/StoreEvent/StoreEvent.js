import { useEffect } from "react";

const StoreEvent = (props) => {
  useEffect(() => {
    props.storeEventFunction(props.evDet);
    props.evCreationFunction();
  }, [props]);

  return null;
};

export default StoreEvent;
