import React, {Component} from 'react';
import {connect} from 'react-redux'
import classes from './Calendar.module.css';


class Calendar extends Component {

    state = {
        isLoading: true,
        calendarBodyArray: [],
        noOfDaysDraw: 1,
        nextPropsValue:null
    };


    componentWillReceiveProps(nextProps){
        this.updateCalendarBody(nextProps.totalNoOfDays,nextProps.monthStartDay);
    }


    weekArray = [{}, {}, {}, {}, {}, {}, {}];

    event1Array = [
        {
            dates: [1,2],
            eventName: "event-1",
            type: "event1"
        },
        {
            dates: [4,5],
            eventName: "event-2",
            type: "event2"
        },
        {
            dates: [6, 7],
            eventName: "event-3",
            type: "event3"
        },
        {
            dates: [10],
            eventName: "event-4",
            type: "event4"
        },
        {
            dates: [14,15,16],
            eventName: "event-5",
            type: "event5"
        },
        {
            dates: [18,19],
            eventName: "event-6",
            type: "event6"
        },
        {
            dates: [22,25],
            eventName: "event-6",
            type: "event1"
        },
        {
            dates: [27,28],
            eventName: "event-6",
            type: "event4"
        },
        {
            dates: [30],
            eventName: "event-2",
            type: "event2"
        }
    ];

    event2Array = [
        {
            dates: [2,3],
            eventName: "event-3",
            type: "event3"
        },
        {
            dates: [8],
            eventName: "event-2",
            type: "event2"
        },
        {
            dates: [16,17],
            eventName: "event-4",
            type: "event4"
        },
        {
            dates: [31],
            eventName: "event-5",
            type: "event5"
        },
        {
            dates: [20,21,22],
            eventName: "event-5",
            type: "event5"
        },
        {
            dates: [26,27],
            eventName: "event-2",
            type: "event2"
        }
    ];


    updateCalendarBody = (totalNoOfDays,monthStartDay) => {
        let isFirstWeek = true;
        let noOfDaysDraw = 1;
        let calendarKey = 0;
        let noOfWeeksInMonth = 0;
        let noOfDaysInFirstWeek = (7 - monthStartDay) + 1;
        noOfWeeksInMonth = parseInt(((totalNoOfDays) - noOfDaysInFirstWeek) / 7);

        if (noOfDaysInFirstWeek > 0) {
            noOfWeeksInMonth = noOfWeeksInMonth + 1;
        }

        if (((totalNoOfDays) % 7 !== 0)) {
            noOfWeeksInMonth = noOfWeeksInMonth + 1;
        } else{
            noOfWeeksInMonth = noOfWeeksInMonth + 1;
        }


        let calendarBodyArray = [];
        for (let j = 1; j <= noOfWeeksInMonth; j++) {
            let tempArray = [];
            for (let i = 1; i <= 7; i++) {
                calendarKey++;
                if (isFirstWeek === true) {

                    if (i < (monthStartDay)) {
                        tempArray.push({
                            key: calendarKey,
                            position:1
                        });
                    } else {
                        tempArray.push({
                            day: noOfDaysDraw++,
                            key: calendarKey
                        });
                    }

                    if (i === 7) {
                        isFirstWeek = false;
                    }
                } else {
                    if (noOfDaysDraw <= (totalNoOfDays)) {
                        tempArray.push({
                            day: noOfDaysDraw++,
                            key: calendarKey
                        });
                    } else {
                        tempArray.push({
                            key: calendarKey,
                            position:2
                        });
                    }
                }
                if (i === 7) {
                    calendarBodyArray.push(tempArray);
                }
            }
        }
        this.setState({
            ...this.state,
            calendarBodyArray: calendarBodyArray
        })
    };

    componentDidMount() {
        this.updateCalendarBody(this.props.totalNoOfDays,this.props.monthStartDay);
    }

    getEventObj = (array, day) => {
        if (array !== undefined && day !== undefined) {
            let selectedEventObj = {};
            for (let eventObj of array) {
                if (eventObj !== undefined) {
                    let eventDaysArray = eventObj.dates;
                    let isEventExist = (eventDaysArray.indexOf(day)) >= 0;
                    if (isEventExist) {
                        selectedEventObj = eventObj;
                        break;
                    }
                }
            }
            return selectedEventObj;
        } else {
            return {}
        }
    };

    getEvent1TableRows = (index) => {
        if (index !== undefined && index !== null) {
            let weekArray = this.state.calendarBodyArray[index];
            let noOfDayDraw = 0;
            let eventRows = (weekArray).map((dayObj, index) => {
                if (index === noOfDayDraw) {
                    if (Object.keys(dayObj).length === 0) {
                        noOfDayDraw = noOfDayDraw + 1;
                        return (<td key={index} ></td>);
                    } else {
                        let eventObj = this.getEventObj(this.event1Array, dayObj.day);
                        if (Object.keys(eventObj).length > 0) {
                            let arrayLength = (eventObj.dates).length;
                            noOfDayDraw = noOfDayDraw + arrayLength;
                            return (
                                <td key={index} colSpan={arrayLength}>
                                <span className={[classes.EventTag, classes[eventObj.type]].join(" ")}>
                                    {eventObj.eventName}
                                </span>
                                </td>)
                        } else {
                            noOfDayDraw = noOfDayDraw + 1;
                            return (<td key={index}></td>)
                        }
                    }
                } else {
                    return null
                }

            });

            return (eventRows)
        }
    };


    getEvent2TableRows = (index) => {
        if (index !== undefined && index !== null) {
            let weekArray = this.state.calendarBodyArray[index];
            let noOfDayDraw = 0;
            let eventRows = (weekArray).map((dayObj, index) => {
                if (index === noOfDayDraw) {
                    if (Object.keys(dayObj).length === 0) {
                        noOfDayDraw = noOfDayDraw + 1;
                        return (<td key={index}></td>);
                    } else {
                        let eventObj = this.getEventObj(this.event2Array, dayObj.day);
                        if (Object.keys(eventObj).length > 0) {
                            let arrayLength = (eventObj.dates).length;
                            noOfDayDraw = noOfDayDraw + arrayLength;
                            return (
                                <td key={index} colSpan={arrayLength}>
                                <span className={[classes.EventTag, classes[eventObj.type]].join(" ")}>
                                    {eventObj.eventName}
                                </span>
                                </td>)
                        } else {
                            noOfDayDraw = noOfDayDraw + 1;
                            return (<td key={index}></td>)
                        }
                    }
                } else {
                    return null
                }

            });

            return (eventRows)
        }
    };

    calendarBodyContainerTable = (isLastIndex) => {
        let className = classes.CalendarDay;
        if (!isLastIndex) {
            className = classes.CalendarDay;
        } else {
            className = [classes.CalendarDay, classes.LasWeek].join(" ");
        }
        let weekCell = (this.weekArray).map((obj,index) => {
            return (<td key={index} className={className}></td>)
        });

        return (
            <div className={classes.CalendarWeekCells}>
                <table className={classes.weekSkeleton}>
                    <tbody>
                    <tr>
                        {weekCell}
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    };

    render() {
        let calendarBody = null;
        if (this.state.calendarBodyArray.length > 0) {

            calendarBody = (this.state.calendarBodyArray).map((dayObjectsArray, index) => {
                let tableData = dayObjectsArray.map((dayObj) => {
                    if (dayObj !== undefined && Object.keys(dayObj).length > 0) {
                        return (
                            <td key={dayObj.key}>{dayObj.day}</td>
                        )
                    } else {
                        return (<td key={dayObj.key}></td>);
                    }
                });

                let event1TableRows = this.getEvent1TableRows(index);
                let vent2TableRows = this.getEvent2TableRows(index);
                let calendarCell = this.calendarBodyContainerTable(((index+1) === (this.state.calendarBodyArray.length)));

                return (
                    <div key={index} className={classes.CalendarWeekCells}>
                        {calendarCell}
                        <div className={classes.CalendarData}>
                            <table key={index}>
                                <thead>
                                <tr>
                                    {tableData}
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    {event1TableRows}
                                </tr>
                                <tr>
                                    {vent2TableRows}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            });
        }
        return (
            <div className={classes.Container}>
                <div className={classes.CalendarHeader}>
                    <table>
                        <tbody>
                        <tr>
                            <td>Sun</td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.CalendarBody}>{calendarBody}</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        totalNoOfDays: state.scheduler.totalNumberOfDays,
        monthStartDay: state.scheduler.monthStartDay
    }
};

export default connect(mapStateToProps)(Calendar);
