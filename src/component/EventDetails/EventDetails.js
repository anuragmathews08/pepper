import React from "react";
import classes from "./EventDetails.module.css";
import { Link } from "react-router-dom";

import Button from "../../component/UI/Button/Button";

import ArrowImg from "../../assets/icons/left-arrow.svg";
import BirthdayBannerImg from "../../assets/illustrations/birthday.svg";
import AnniversaryBannerImg from "../../assets/illustrations/anniversary.svg";

const EventDetails = (props) => {
  let disable =
    props.title.length === 0 ||
    props.month.length === 0 ||
    props.date.length === 0;

  let BannerImg;
  if (props.evType === "Birthday") {
    BannerImg = <img src={BirthdayBannerImg} alt="Banner img" />;
  } else if (props.evType === "Anniversary") {
    BannerImg = <img src={AnniversaryBannerImg} alt="Banner img" />;
  }

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
        <div className={classes.banner__box}>{BannerImg}</div>
      </div>

      <div className={classes.eventDetail__info}>
        <div className={classes.info__name}>
          <h3>Event Title</h3>
          <div className={classes.info__input}>
            <input
              type="text"
              name="EventTitle"
              placeholder="e.g. Anurag's Birthday"
              value={props.title}
              onChange={(e) => props.setTitle("val", e)}
            />
          </div>
        </div>

        <div className={classes.info__date}>
          <div className={classes.month}>
            <h3>Month</h3>
            <select
              name="MonthInput"
              className={classes.month__input}
              value={props.month}
              onChange={(e) => props.setMonth("val", e)}
            >
              <option value="January" defaultValue>
                January
              </option>
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
                type="number"
                name="DateInput"
                placeholder="e.g. 8"
                value={props.date}
                onChange={(e) => props.setDate("val", e)}
              />
            </div>
          </div>
        </div>
      </div>

      <Button disable={disable} click={props.createEventFunc}>
        Create Event
      </Button>
    </div>
  );
};

export default EventDetails;
