import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actions";

import EventType from "../../../component/EventType/EventType";

function ChooseEvent(props) {
 
  const [bSelect, setBSelect] = useState(false);
  const [aSelect, setASelect] = useState(false);

  const BcardClicked = () => {
    setBSelect(true);
    props.onBirthdaySelect();
    if (aSelect) {
      setASelect(false);
    }
  };

  const AcardClicked = () => {
    setASelect(true);
    props.onAnniversarySelect();
    if (bSelect) {
      setBSelect(false);
    }
  };

  let isDisable = true;
  if (bSelect !== false || aSelect !== false) {
    isDisable = false;
  }

  const buttonClick = () => {
    props.history.push("/addevent/details");
  };

  return (
    <>
      <EventType 
      bSelect={bSelect}
      aSelect={aSelect}
      setBSelect={setBSelect}
      setASelect={setASelect}
      buttonClick={() => buttonClick()}
      isDisable={isDisable}
      BcardClicked={() => BcardClicked()}
      AcardClicked={() => AcardClicked()}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    evType: state.evDetails.eventDetails.eventType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBirthdaySelect: () => dispatch(actionCreators.onBirthday()),
    onAnniversarySelect: () => dispatch(actionCreators.onAnniversary()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChooseEvent));
