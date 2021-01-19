import React from 'react';
import classes from './EventList.module.css';

import EventCard from '../Event card/EventCard';

const EventList = () => {
    return (
        <div className={classes.listBlock}>
            <div className={classes.listBlock__month}>
                <p>April 2021</p>
                <span className={classes.listBlock__line}></span>
            </div>

            <div className={classes.listBlock__eventCards}>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>

        </div>
    )
}

export default EventList;
