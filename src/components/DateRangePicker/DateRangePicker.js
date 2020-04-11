import React, {Component} from 'react';
import {Calendar} from "react-feather";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Moment from 'react-moment';

import classes from './DateRangePicker.css';

class DateTimePicker extends Component {
    dateToFormat = new Date();
    dateRangeApplied = (event, picker) => {
        let dateRangeObj = {};
        dateRangeObj["startDate"] = new Date((picker.startDate)._d);
        dateRangeObj["endDate"] = new Date((picker.endDate)._d);
        this.props.onApplyDateRange(dateRangeObj);
    };

    render() {
        return (
            <div className={classes.Container}>
                <DateRangePicker
                    buttonClasses={[classes.DateRangeApply]}
                    cancelClass = {classes.DateRangeCancel}
                    startDate={"12/1/2017"}
                    endDate={"2/1/2018"}
                    timePicker={true}
                    onApply={this.dateRangeApplied}>
                    <div className={classes.DateRangeDiv}>
                        <div className={classes.DateRangeIcon}>
                            <Calendar color={"#727BF5"} size={18}/>
                        </div>
                        <div className={classes.DateRangeValues}>
                            <Moment format={'DD-MMMM-YYYY'}>{this.props.calendarStartDate}</Moment>
                            <Moment format={'DD-MMMM-YYYY'}>{this.props.calendarEndDate}</Moment>
                        </div>
                    </div>
                </DateRangePicker>
            </div>
        )
    }
}

export default DateTimePicker;
