import * as actionTypes from './actionTypes';

const getTotalDaysInMonth = (month,year) => {
    if (month !== undefined && month !== null) {
        switch (month) {
            case 0 :
                return 31;
            case 1 :
               let isLeapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
                return isLeapYear ? 29 : 28;
            case 2:
                return 31;
            case 3:
                return 30;
            case 4:
                return 31;
            case 5:
                return 30;
            case 6:
                return 31;
            case 7:
                return 31;
            case 8:
                return 30;
            case 9:
                return 31;
            case 10:
                return 30;
            case 11:
                return 31;
            default:
                return 30
        }
    }
};


export const updateMonthDetail = () => {
    let currentMonth = new Date().getMonth();
    let timeStamp = new Date();
    timeStamp.setMonth(currentMonth);
    timeStamp.setDate(1);
    let monthStartDay = (timeStamp.getDay())+1;
    let totalNumberOfDaysInMonth = getTotalDaysInMonth(currentMonth,timeStamp.getFullYear() );
    return{
        type: actionTypes.UPDATE_MOTH_DETAIL,
        monthStartDay:monthStartDay,
        totalDays:totalNumberOfDaysInMonth,
        timestamp:timeStamp,
    }
};

export const loadNextMonth = (currentMonthTimestamp) => {
    if (currentMonthTimestamp !== undefined && currentMonthTimestamp !== null) {
        let currentMonth = new Date(currentMonthTimestamp).getMonth();
        let currentYear = new Date(currentMonthTimestamp).getFullYear();

        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear = currentYear +1
        } else {
            currentMonth = currentMonth +1;
        }

        let timeStamp = new Date();
        timeStamp.setMonth(currentMonth);
        timeStamp.setDate(1);
        timeStamp.setFullYear(currentYear);

        let monthStartDay = (timeStamp.getDay())+1;
        let totalNumberOfDaysInMonth = getTotalDaysInMonth(currentMonth,timeStamp.getFullYear());

        return{
            type: actionTypes.LOAD_NEXT_MONTH,
            monthStartDay:monthStartDay,
            totalDays:totalNumberOfDaysInMonth,
            timestamp:timeStamp,
        }
    }
};

export const loadPreviousMonth = (currentMonthTimestamp) => {
    if (currentMonthTimestamp !== undefined && currentMonthTimestamp !== null) {
        let currentMonth = new Date(currentMonthTimestamp).getMonth();
        let currentYear = new Date(currentMonthTimestamp).getFullYear();

        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear = currentYear -1
        } else {
            currentMonth = currentMonth -1;
        }

        let timeStamp = new Date();
        timeStamp.setMonth(currentMonth);
        timeStamp.setDate(1);
        timeStamp.setFullYear(currentYear);

        let monthStartDay = (timeStamp.getDay())+1;
        let totalNumberOfDaysInMonth = getTotalDaysInMonth(currentMonth,timeStamp.getFullYear() );

        return{
            type: actionTypes.LOAD_PREVIOUS_MONTH,
            monthStartDay:monthStartDay,
            totalDays:totalNumberOfDaysInMonth,
            timestamp:timeStamp,
        }
    }
};

export const showLoading = () => {
    return{
        type: actionTypes.SHOW_LOADING
    }
};
