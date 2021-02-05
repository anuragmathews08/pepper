import React, { useEffect } from "react";
import classes from "./Home.module.css";
import HomeImage from "../../assets/illustrations/home-image.svg";
import EventList from "../../component/EventList/EventList";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

import { db } from "../../firebase";

function Home(props) {
  let newListObj = [];
  for (let key in props.eList) {
    if (props.eList[key].length > 0) {
      let temp = {
        [key]: props.eList[key],
      };
      newListObj = [...newListObj, temp];
    }
  }
  const initFunc = props.initEventsFunc;
  useEffect(() => {
    db.collection("events")
      .doc("anuragmathews007@gmail.com")
      .get()
      .then((doc) => {
        const obj = doc.data();
        initFunc(obj);
      });
  });

  let displayList = (
    <div className={classes.homeBlock__emptyList}>
      <h3>No event added yet</h3>
    </div>
  );
  if (newListObj.length > 0) {
    displayList = newListObj.map((el, index) => {
      let month = Object.keys(el)[0];
      let list = el[month];
      let d = new Date();
      let currentyear = d.getFullYear();
      return (
        <EventList key={index} month={month} list={list} year={currentyear} />
      );
    });
  }

  return (
    <div className={classes.homeBlock}>
      <div className={classes.homeBlock__banner}>
        <div className={classes.homeBlock__heading}>
          <h1>Never forget any special event</h1>
          <p>You'll always be the first to remember every special event</p>
        </div>
        <div className={classes.homeBlock__image}>
          <img src={HomeImage} alt="Couple Looking at cake" />
        </div>
      </div>
      <div className={classes.homeBlock__intro}>
        <p>
          <span className={classes.homeBlock__intro__highlight}>Pepper</span> is
          an event reminder service that helps you set up a reminder for special
          events like{" "}
          <span className={classes.homeBlock__intro__highlight}>Birthdays</span>{" "}
          and{" "}
          <span className={classes.homeBlock__intro__highlight}>
            Anniversaries.
          </span>
        </p>
        <p>
          Just setup once and it will remind you of the events every year at 12
          A.M.
        </p>
      </div>

      <div className={classes.homeBlock__eventList}>
        <h1>Event List</h1>
        <span className={classes.homeBlock__line}></span>
      </div>
      <div className={classes.homeBlock__listBox}>{displayList}</div>
    </div>
  );
}

const mapStatToProps = (state) => {
  return {
    eList: state.evList.eventList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initEventsFunc: (events) => dispatch(actionCreators.initEvents(events)),
  };
};

export default connect(mapStatToProps, mapDispatchToProps)(Home);
