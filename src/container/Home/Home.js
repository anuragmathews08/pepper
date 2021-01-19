import React from "react";
import classes from "./Home.module.css";
import HomeImage from "../../assets/illustrations/home-image.svg";
import EventList from "../../component/EventList/EventList";

function Home() {
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
      <div className={classes.homeBlock__listBox}>
        <EventList />
        <EventList />
        <EventList />
      </div>
    </div>
  );
}

export default Home;
