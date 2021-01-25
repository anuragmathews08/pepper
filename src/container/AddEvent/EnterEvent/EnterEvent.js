import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./EnterEvent.module.css";

import Button from "../../../component/UI/Button/Button";

import ArrowImg from "../../../assets/icons/left-arrow.svg";
import BirthdayBannerImg from "../../../assets/illustrations/birthday.svg";
// import AnniversaryBannerImg from '../../../assets/illustrations/anniversary.svg';

function EnterEvent() {
  const [eventName, setEventName] = useState("");
  const [eventMonth, setEventMonth] = useState("January");
  const [eventDate, setEventDate] = useState("");
  const [whatsNumber, setWhatsNumber] = useState("");

  return (
    <div className={classes.eventDetail__block}>
      <div className={classes.eventDetail__nav}>
        <Link to="/addevent" className={classes.backNavStyle}>
          <img src={ArrowImg} alt="" />
          Back
        </Link>
        <Link to="/">Cancel</Link>
      </div>

      <div className={classes.eventDetail__banner}>
        <div className={classes.banner__box}>
          <img src={BirthdayBannerImg} alt="Banner img" />
        </div>
      </div>

      <div className={classes.eventDetail__info}>
        <div className={classes.info__name}>
          <h3>Event Title</h3>
          <div className={classes.info__input}>
            <input
              type="text"
              name="EventTitle"
              placeholder="e.g. Anurag's Birthday"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.info__date}>
          <div className={classes.month}>
            <h3>Month</h3>
            <select
              name="MonthInput"
              className={classes.month__input}
              value={eventMonth}
              onChange={(e) => setEventMonth(e.target.value)}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>

          <div className={classes.date}>
            <h3>Date</h3>
            <div className={classes.input__date}>
              <input
                type="text"
                name="DateInput"
                placeholder="e.g. 8"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>
          </div>

          <div className={classes.info__number}>
            <h3>Whatsapp</h3>
            <div className={classes.input__number}>
              <input
                type="text"
                name="NumberInput"
                placeholder="e.g. 95754812"
                value={whatsNumber}
                onChange={(e) => setWhatsNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <Button>Create Event</Button>
    </div>
  );
}

export default EnterEvent;
