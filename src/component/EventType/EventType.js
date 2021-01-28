import React from "react";
import classes from "./EventType.module.css";

import Button from "../../component/UI/Button/Button";
import { Link } from "react-router-dom";

import CakeWhite from "../../assets/icons/cake-white.svg";
import RingDark from "../../assets/icons/wedding-ring-dark.svg";
import CakeDark from "../../assets/icons/cake.svg";
import RingWhite from "../../assets/icons/wedding-ring.svg";

import ChoiceCard from "../../component/Choice Card/ChoiceCard";

const EventType = (props) => {
  return (
    <div className={classes.choose__block}>
      <div className={classes.choose__heading}>
        <h2>Choose Event</h2>
        <Link to="/">Cancel</Link>
      </div>

      <div className={classes.choose__type}>
        <div className={classes.type__cardContainer}>
          <ChoiceCard
            img={props.bSelect ? CakeWhite : CakeDark}
            desc="Birthday Cake"
            title="Birthday"
            selected={props.bSelect}
            click={props.BcardClicked}
          />
          <ChoiceCard
            img={props.aSelect ? RingWhite : RingDark}
            desc="Ring Card"
            title="Anniversary"
            selected={props.aSelect}
            click={props.AcardClicked}
          />
        </div>
      </div>
      <div className={classes.choose__button}>
        <Button disable={props.isDisable} click={props.buttonClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default EventType;
