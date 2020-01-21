import * as actionTypes from '../actions/actionTypes';

let initialState = {
    isLoading:true,
    totalNumberOfDays:null,
    currentMonth:null,
    currentYear:null,
    timestamp:null
};

const updateInitialDates = (state,action) => {
    let timestamp = new Date(action.timestamp);
    return{
        ...state,
        isLoading:false,
        monthStartDay:action.monthStartDay,
        totalNumberOfDays:action.totalDays,
        currentMonth:timestamp.getMonth(),
        currentYear:timestamp.getFullYear(),
        timestamp:action.timestamp
    }
};

const updateNextMonthDetail = (state, action) => {
    let timestamp = new Date(action.timestamp);
    return{
        ...state,
        isLoading:false,
        monthStartDay:action.monthStartDay,
        totalNumberOfDays:action.totalDays,
        currentMonth:timestamp.getMonth(),
        currentYear:timestamp.getFullYear(),
        timestamp:action.timestamp
    }
};

const updatePreviousMonthDetail = (state, action) => {
    let timestamp = new Date(action.timestamp);
    return{
        ...state,
        isLoading:false,
        monthStartDay:action.monthStartDay,
        totalNumberOfDays:action.totalDays,
        currentMonth:timestamp.getMonth(),
        currentYear:timestamp.getFullYear(),
        timestamp:action.timestamp
    }
};

const showLoading = (state) => {
    return{
        ...state,
        isLoading:true
    }
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADING:
            return showLoading(state);
        case actionTypes.UPDATE_MOTH_DETAIL:
            return updateInitialDates(state,action);
        case actionTypes.LOAD_NEXT_MONTH:
            return updateNextMonthDetail(state,action);
        case actionTypes.LOAD_PREVIOUS_MONTH:
            return updatePreviousMonthDetail(state, action);
        default:
            return state
    }
};

export default reducer;
