import React, { useState } from "react";
import classes from "./ChooseEvent.module.css";
import Button from "../../../component/UI/Button/Button";
import { Link, withRouter } from "react-router-dom";

import CakeWhite from "../../../assets/icons/cake-white.svg";
import RingDark from "../../../assets/icons/wedding-ring-dark.svg";
import CakeDark from "../../../assets/icons/cake.svg";
import RingWhite from "../../../assets/icons/wedding-ring.svg";

import ChoiceCard from "../../../component/Choice Card/ChoiceCard";

function ChooseEvent(props) {
  const [bSelect, setBSelect] = useState(false);
  const [aSelect, setASelect] = useState(false);

  const BcardClicked = () => {
    setBSelect(true);
    if (aSelect) {
      setASelect(false);
    }
  };

  const AcardClicked = () => {
    setASelect(true);
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
    <div className={classes.choose__block}>
      <div className={classes.choose__heading}>
        <h2>Choose Event</h2>
        <Link to="/">Cancel</Link>
      </div>

      <div className={classes.choose__type}>
        <div className={classes.type__cardContainer}>
          <ChoiceCard
            img={bSelect ? CakeWhite : CakeDark}
            desc="Birthday Cake"
            title="Birthday"
            selected={bSelect}
            click={() => BcardClicked()}
          />
          <ChoiceCard
            img={aSelect ? RingWhite : RingDark}
            desc="Ring Card"
            title="Anniversary"
            selected={aSelect}
            click={() => AcardClicked()}
          />
        </div>
      </div>
      <div className={classes.choose__button}>
        <Button disable={isDisable} click={() => buttonClick()}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default withRouter(ChooseEvent);
