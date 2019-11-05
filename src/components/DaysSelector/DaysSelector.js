import React from 'react';
import classes from './DaysSelector.module.css';

const daysSelector = (props) => {
    let days7Class = "";
    let days30Class = "";
    let days60Class = "";
    let day90Class = "";
    if (props.selectedDay) {
        switch (props.selectedDay) {
            case 7:
                days30Class = "";
                days60Class = "";
                day90Class = "";
                days7Class = classes.selected;
                break;
            case 30:
                days7Class = "";
                days60Class = "";
                day90Class = "";
                days30Class = classes.selected;
                break;
            case 60:
                days7Class = "";
                days60Class = classes.selected;
                day90Class = "";
                days30Class = "";
                break;
            case 90:
                days7Class = "";
                days60Class = "";
                day90Class = classes.selected;
                days30Class = "";
                break;
            default:
                days30Class = "";
                days60Class = "";
                day90Class = "";
                days7Class = classes.selected;
        }
    }
    return(
        <div className={classes.Container}>
            <div className={days7Class} onClick={() => {props.clicked(7)}}>Week</div>
            <div className={days30Class} onClick={() => {props.clicked(30)}}>30 days</div>
            <div className={days60Class} onClick={() => {props.clicked(60)}}>60 days</div>
            <div className={day90Class} onClick={() => {props.clicked(90)}}>90 days</div>
        </div>
    )
};

export default daysSelector;
