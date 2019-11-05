import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoading: true,
    errorMessage:"",
    isError: false,
    startDate: "2017-12-01T13:02:00.000Z",
    endDate: "2018-02-01T18:29:00.000Z",
    metricsList: [],
    analyticsResponse: []
};

const updateStartAndEndDate = (state, action) => {
    return {
        ...state,
        isLoading: true,
        startDate: action.dateRange.startDate,
        endDate: action.dateRange.endDate
    }
};

const clearAnalyticsArray = (state,action) =>{
    return{
        ...state,
        isLoading: true,
        analyticsResponse:[]
    }
};


const updateAnalyticsResponse = (state, action) => {
    let updatedArray = [...state.analyticsResponse].concat(action.updatedObj);
    updatedArray = updatedArray.sort((obj1, obj2) =>{
        return obj1.sortValue - obj2.sortValue
    });
    return {
        ...state,
        isLoading: false,
        analyticsResponse: updatedArray
    }
};

const updateAnalyticsError = (state, action) => {
    return{
        ...state,
        errorMessage: action.errorMessage
    }
};

const toggleAnalyticsErrorView = (state) => {
    return{
        ...state,
        isError: !(state.isError)
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_APPLY_DATE_RANGE_ANALYTICS:
            return updateStartAndEndDate(state, action);
        case actionTypes.UPDATE_ANALYTICS_RESPONSE:
            return updateAnalyticsResponse(state, action);
        case actionTypes.CLEAR_ANALYTICS_ARRAY:
            return clearAnalyticsArray(state, action);
        case actionTypes.TOGGLE_ANALYTICS_ERROR_VIEW:
            return toggleAnalyticsErrorView(state);
        case actionTypes.LOG_ANALYTICS_ERROR:
            return updateAnalyticsError(state, action);
        default:
            return state;
    }
};

export default reducer
