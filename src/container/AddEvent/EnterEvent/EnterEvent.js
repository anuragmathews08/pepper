import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actions";

import EventDetails from "../../../component/EventDetails/EventDetails";
import StoreEvent from "../../../component/StoreEvent/StoreEvent";

function EnterEvent(props) {
  const [sTitle, setSTitle] = useState("");
  const [sMonth, setSMonth] = useState("January");
  const [sDate, setSDate] = useState("");
  const [storeEvent, setStoreEvent] = useState(false);
  const [evCreated, setEvCreated] = useState(false);

  const createEvent = () => {
    props.setTitle(sTitle);
    props.setMonth(sMonth);
    props.setDate(sDate);
    setStoreEvent(true);
  };

  useEffect(() => {
    if (evCreated) {
      props.history.replace("/");
    }
  }, [evCreated, props.history]);

  const EvCreationHandler = () => {
    setStoreEvent(false);
    setEvCreated(true);
  };

  let eventPage = <Redirect to="/addevent" />;
  if (props.evType === "Birthday" || props.evType === "Anniversary") {
    eventPage = (
      <>
        <EventDetails
          title={sTitle}
          month={sMonth}
          date={sDate}
          createEventFunc={() => createEvent()}
          setTitle={(val, e) => setSTitle(e.target.value)}
          setMonth={(val, e) => setSMonth(e.target.value)}
          setDate={(val, e) => setSDate(e.target.value)}
          evType={props.evType}
        />
        {storeEvent ? (
          <StoreEvent
            evDet={props.evDetails}
            storeEventFunction={(details) =>
              props.storeEventFunc(details, props.uId)
            }
            evCreationFunction={() => EvCreationHandler()}
          />
        ) : null}
      </>
    );
  }

  return eventPage;
}

const mapStateToProps = (state) => {
  return {
    evType: state.evDetails.eventDetails.eventType,
    evDetails: state.evDetails.eventDetails,
    uId: state.userDetails.user.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(actionCreators.setTitle(title)),
    setMonth: (month) => dispatch(actionCreators.setMonth(month)),
    setDate: (date) => dispatch(actionCreators.setDate(date)),
    storeEventFunc: (evDetails, docId) =>
      dispatch(actionCreators.storeEvent(evDetails, docId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EnterEvent));
