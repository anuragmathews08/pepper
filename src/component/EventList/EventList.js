import React from "react";
import classes from "./EventList.module.css";

import EventCard from "../Event card/EventCard";

const EventList = (props) => {
  return (
    <div className={classes.listBlock}>
      <div className={classes.listBlock__month}>
        <p>
          {props.month} {props.year}
        </p>
        <span className={classes.listBlock__line}></span>
      </div>

      <div className={classes.listBlock__eventCards}>
        {props.list.map((el,index) => {
          let eType = el.eventType;
          let eDate = el.eventDate;
          let eTitle = el.eventTitle;
          return (
            <EventCard
              type={eType}
              date={eDate}
              title={eTitle}
              month={props.month}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
