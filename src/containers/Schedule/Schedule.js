import React, {Component,Fragment} from 'react';
import classes from './Schedule.css';

import * as action from '../../store/actions/index';
import {connect} from 'react-redux';

import {ChevronLeft, ChevronRight} from "react-feather";

import Moment from 'react-moment';

import Calendar from '../../components/Calendar/Calendar';
import EventList from '../../components/Calendar/EventList/EventList';
import Spinner from '../../components/Spinner/Spinner';
import Agents from '../../components/AgentList/Agents';

class Schedule extends Component{

    state={
        isEventViewLoaded:true,
        calendarUpdateCount: 0
    };

    componentDidMount() {
        this.props.updateMonthDetails();
        this.props.loadUserView();
    }


    loadPreviousMonthHandler = () => {
        this.props.showLoader();
            this.props.loadPreviousMonth(this.props.currentCalendarTimestamp);

    };

    loadNextMonthHandler = () => {
        this.props.showLoader();
        this.props.loadNextMonth(this.props.currentCalendarTimestamp);
    };

    toggleScheduleView = (isEventViewSelected) => {
        this.setState({
           ...this.state,
            isEventViewLoaded:isEventViewSelected
        });
    };

    render() {
        let scheduleView = null;

        if (this.state.isEventViewLoaded) {
            if (!this.props.isLoading && this.props.monthStartDay !== undefined && this.props.totalNoDaysInMonth !== undefined) {
                scheduleView = (
                    <div className={classes.Schedule}>
                        <div className={classes.EventListDiv}>
                            <EventList/>
                        </div>
                        <div className={classes.CalendarDetailDiv}>
                            <div className={classes.CalendarHeader}>
                                <div className={classes.CalendarControl}>
                                    <div onClick={() => {this.loadPreviousMonthHandler()}}
                                         className={[classes.CalendarChevron, classes.BrdRight].join(" ")}>
                                        <ChevronLeft color={'#727cf5'} />
                                    </div>
                                    <div className={[classes.CurrentDay].join(" ")}>
                                        Today
                                    </div>
                                    <div onClick={() => {this.loadNextMonthHandler()}}
                                         className={[classes.CalendarChevron, classes.BrdLeft].join(" ")}>
                                        <ChevronRight color={'#727cf5'} />
                                    </div>
                                </div>
                                <div className={classes.CurrentCalendarDetail}>
                                    <Moment format={"MMMM YYYY"}>{this.props.currentCalendarTimestamp}</Moment>
                                </div>
                                <div className={classes.ToggleCalendarView}>
                                    <div className={[classes.BrdRight, classes.SelectedCalendarView].join(" ")}>Month</div>
                                    <div className={classes.BrdRight}>Week</div>
                                    <div>Day</div>
                                    <div className={classes.BrdLeft}>List</div>
                                </div>
                            </div>
                            <Calendar />
                        </div>
                    </div>
                );
            } else {
                scheduleView = <Spinner/>
            }
        } else {
            scheduleView = <Agents />
        }


        let eventTabMenuClasses = null;
             let agentsTabMenuClasses = null;
             if (this.state.isEventViewLoaded) {
                 eventTabMenuClasses = [classes.TabMenuOption, classes.SelectedTab].join(" ");
                 agentsTabMenuClasses = classes.TabMenuOption
             } else {
                 eventTabMenuClasses = classes.TabMenuOption;
                 agentsTabMenuClasses = [classes.TabMenuOption, classes.SelectedTab].join(" ");
             }

        return(
            <Fragment>
                <div className={classes.TabMenuHead}>
                    <div className={classes.TabMenu}>
                    <div onClick={() => {this.toggleScheduleView(true)}}
                         className={eventTabMenuClasses}>
                        Events
                    </div>
                    <div onClick={() => {this.toggleScheduleView(false)}}
                         className={agentsTabMenuClasses}>
                        Agents
                    </div>
                    </div>
                </div>
            {scheduleView}
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
                return{
                    updateMonthDetails: () => dispatch(action.updateMonthDetail()),
                    loadPreviousMonth: (timestamp) => dispatch(action.loadPreviousMonth(timestamp)),
                    loadNextMonth: (timestamp) => dispatch(action.loadNextMonth(timestamp)),
                    showLoader: () => dispatch(action.showLoading()),
                    loadUserView: () => dispatch(action.changeAdminView(false))
                }
};

const mapStateToProps = (state) => {
                return{
                    isLoading:state.scheduler.isLoading,
                    monthStartDay: state.scheduler.monthStartDay,
                    totalNoDaysInMonth:state.scheduler.totalNumberOfDays,
                    currentCalendarTimestamp:state.scheduler.timestamp
                }
};

export default connect(mapStateToProps,mapDispatchToProps)(Schedule);
