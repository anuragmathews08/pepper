import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actions";

import EventDetails from "../../../component/EventDetails/EventDetails";

function EnterEvent(props) {
  const [sTitle, setSTitle] = useState("");
  const [sMonth, setSMonth] = useState("January");
  const [sDate, setSDate] = useState("");

  const createEvent = () => {
    props.setTitle(sTitle);
    props.setMonth(sMonth);
    props.setDate(sDate);
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
      </>
    );
  }

  return eventPage;
}

const mapStateToProps = (state) => {
  return {
    evType: state.eventDetails.eventType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch({ type: actionTypes.SETTITLE, title: title }),
    setMonth: (month) => dispatch({ type: actionTypes.SETMONTH, month: month }),
    setDate: (date) => dispatch({ type: actionTypes.SETDATE, date: date }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterEvent);
