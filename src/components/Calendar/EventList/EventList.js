import React from 'react';
import classes from './EventList.css';

const eventList = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.EventListHeader}>
                FULL CALENDAR
            </div>
            <div className={classes.EventList}>
                <div className={[classes.Event, classes.Event1].join(" ")}>
                    Event-1
                </div>
                <div className={[classes.Event, classes.Event2].join(" ")}>
                    Event-2
                </div>
                <div className={[classes.Event, classes.Event3].join(" ")}>
                    Event-3
                </div>
                <div className={[classes.Event, classes.Event4].join(" ")}>
                    Event-4
                </div>
                <div className={[classes.Event, classes.Event5].join(" ")}>
                    Event-5
                </div>
                <div className={[classes.Event, classes.Event6].join(" ")}>
                    Event-6
                </div>
            </div>
        </div>
    )
};

export default eventList;
