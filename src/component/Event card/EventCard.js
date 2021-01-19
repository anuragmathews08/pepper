import React from "react";
import classes from "./EventCard.module.css";
import CakeIconWhite from '../../assets/icons/cake-white.svg';
// import RingIconWhite from '../../assets/icons/wedding-ring.svg';


const EventCard = () => {
  return (
    <div className={classes.cardBlock}>
      <div className={classes.cardBlock__eventIcon}>
        <img src={CakeIconWhite} alt="Birthday cake icon" />
        {/* <img src={RingIconWhite} alt="Ring icon" /> */}
      </div>

      <div className={classes.cardBlock__eventDetails}>
        <div className={classes.eventDetails__name}>
          <h4>Anurag's Birthday</h4>
        </div>

        <div className={classes.eventDetails__date}>
          <p>
            Date :{" "}
            <span className={classes.eventDetails__highlight}>8 April</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
