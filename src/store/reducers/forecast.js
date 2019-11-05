import * as actionTypes from '../actions/actionTypes';
let initialState = {
    selectedDaysCount:7,
    forecastRequestMetrics:['TOTAL_CALLS','AVG_HANDLE_TIME','AVG_AGENT_HEAD_COUNT'],
    isLoading: true,
    isSorted:false,
    forecastHistory:{},
    forecastFuture:{},

    totalCallsHistory:{},
    totalCallsFuture:{},
    avgHandleTimeHistory:{},
    avgHandleTimeFuture:{},
    avgAgentHeadCountHistory:{},
    avgAgentHeadCountFuture:{},


    graphType:"line",
    forecastResponse: [],
    actualValueGraphType: "line",

};

const setForecastHistoryResponse = (state, action) => {
    if (action.responseFor === "TOTAL_CALLS") {
        return{
            ...state,
            isLoading: true,
            totalCallsHistory:action.historyValues,
            forecastHistory:action.historyValues
        }
    } else if (action.responseFor === "AVG_HANDLE_TIME") {
        return{
            ...state,
            isLoading: true,
            avgHandleTimeHistory:action.historyValues,
            forecastHistory:action.historyValues
        }
    } else if (action.responseFor === 'AVG_AGENT_HEAD_COUNT') {
        return{
            ...state,
            isLoading: true,
            avgAgentHeadCountHistory:action.historyValues,
            forecastHistory:action.historyValues
        }
    } else {
        return{
            ...state,
            isLoading: true,
            forecastHistory:action.historyValues
        }
    }
};

const setForecastFutureResponse = (state, action) => {
    if (action.responseFor === "TOTAL_CALLS") {
        return{
            ...state,
            isLoading: true,
            totalCallsFuture: action.futureValues,
            forecastFuture:action.futureValues
        }
    } else if (action.responseFor === "AVG_HANDLE_TIME") {
        return{
            ...state,
            isLoading: true,
            avgHandleTimeFuture: action.futureValues,
            forecastFuture:action.futureValues
        }
    } else if (action.responseFor === "AVG_AGENT_HEAD_COUNT") {
        return{
            ...state,
            isLoading: true,
            avgAgentHeadCountFuture: action.futureValues,
            forecastFuture:action.futureValues
        }
    } else {
        return{
            ...state,
            isLoading: true,
            forecastFuture:action.futureValues
        }
    }
};

const updateForecastResponseArray = (state,action) => {

    if (state !== undefined && state.totalCallsHistory !== undefined && state.totalCallsFuture !== undefined
    && Object.keys(state.totalCallsHistory).length > 0 && Object.keys(state.totalCallsFuture).length > 0
    && (state.totalCallsHistory.x).length > 0 && (state.totalCallsFuture.x).length > 0) {
        let updatedObj = createForecastGraphObj(state,action,"totalCallsHistory","totalCallsFuture");
        let updatedArray = [...state.forecastResponse].concat(updatedObj);

        let sortedArray = updatedArray;
        if (sortedArray.length > 0) {
            sortedArray = updatedArray.sort((obj1, obj2) => {
                return (obj1.sortIndex) - (obj2.sortIndex);
            });
        }

        return{
            ...state,
            isLoading: false,
            totalCallsHistory:{},
            totalCallsFuture:{},
            forecastResponse:sortedArray
        }

    }

    if (state !== undefined && state.avgHandleTimeHistory !== undefined && state.avgHandleTimeFuture !== undefined
        && Object.keys(state.avgHandleTimeHistory).length > 0 && Object.keys(state.avgHandleTimeFuture).length > 0
        && (state.avgHandleTimeHistory.x).length > 0 && (state.avgHandleTimeFuture.x).length > 0) {
        let updatedObj =
            createForecastGraphObj(state,action,"avgHandleTimeHistory","avgHandleTimeFuture");

        let updatedArray = [...state.forecastResponse].concat(updatedObj);

        let sortedArray = updatedArray;
        if (sortedArray.length > 0) {
            sortedArray = updatedArray.sort((obj1, obj2) => {
                return (obj1.sortIndex) - (obj2.sortIndex);
            });
        }

        return{
            ...state,
            isLoading: false,
            avgHandleTimeHistory:{},
            avgHandleTimeFuture:{},
            forecastResponse:sortedArray
        }

    }

    if (state !== undefined && state.avgAgentHeadCountHistory !== undefined && state.avgAgentHeadCountFuture !== undefined
        && Object.keys(state.avgAgentHeadCountHistory).length > 0 && Object.keys(state.avgAgentHeadCountFuture).length > 0
        && (state.avgAgentHeadCountHistory.x).length > 0 && (state.avgAgentHeadCountFuture.x).length > 0) {
        let updatedObj =
            createForecastGraphObj(state,action,"avgAgentHeadCountHistory","avgAgentHeadCountFuture");

        let updatedArray = [...state.forecastResponse].concat(updatedObj);

        let sortedArray = updatedArray;
        if (sortedArray.length > 0) {
            sortedArray = updatedArray.sort((obj1, obj2) => {
                return (obj1.sortIndex) - (obj2.sortIndex);
            });
        }

        return{
            ...state,
            isLoading: false,
            avgAgentHeadCountHistory:{},
            avgAgentHeadCountFuture:{},
            forecastResponse:sortedArray
        }

    }

    return {
        ...state,
        isLoading: true
    }
};

const createForecastGraphObj = (state,action,historyObjName,futureObjName) => {
    let forecastGraphObj = {};

    const prediction_color = '#0072B2';
    const fill_color = 'rgba(0, 114, 178, 0.2)';
    const actual_color = 'rgb(0,0,0)';
    const line_width = 2;
    const marker_size = 4;

    let historyObj = state[historyObjName];
    let futureObj = state[futureObjName];

        forecastGraphObj["cartTitle"] = (action.arrayName).split("_").join(" ");
        forecastGraphObj["sortIndex"] = action.sortIndex;
        forecastGraphObj["graphValues"] = [
            {
                name: "Actual",
                type: 'scatter',
                x:[...historyObj.x, ...futureObj.x],
                y:[...historyObj.actual, ...futureObj.actual],
                marker: {
                    color: actual_color,
                    size: marker_size,
                },
                mode:'markers'
            },
            {
                name: "Predicted",
                mode:'lines',
                type: 'scatter',
                line: {
                    color: prediction_color,
                    width: line_width
                },
                fillcolor : fill_color,
                marker:{
                    color:prediction_color
                },
                fill : 'tonexty',
                x:[...historyObj.x, ...futureObj.x],
                y: [...historyObj.predicted, ...futureObj.predicted],
            },
            {
                name:"Predicted Max",
                fill: 'tonexty',
                type: 'scatter',
                mode:'lines',
                marker:{
                    color:fill_color
                },
                line:{
                    width: 0,
                },
                fillcolor : fill_color,
                x:[...historyObj.x, ...futureObj.x],
                y:[...historyObj.upperBound, ...futureObj.upperBound],
            },
            {
                name:"Predicted Min",
                mode:'lines',
                type: 'scatter',
                marker:{
                    color:fill_color
                },
                line:{
                    width: 0
                },
                fill: 'tonexty',
                fillcolor : fill_color,
                x:[...historyObj.x, ...futureObj.x],
                y:[...historyObj.lowerBound, ...futureObj.lowerBound]
            }
        ];

        return forecastGraphObj
};

const updateForecastDaysCount = (state,action) => {
    return{
        ...state,
        isLoading: true,
        selectedDaysCount: action.daysCount
    }
};

const clearForecastArray = (state) => {
    return{
        ...state,
        isLoading: true,
        forecastResponse:[],
    }
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FORECAST_HISTORY_RESPONSE:
            return setForecastHistoryResponse(state, action);
        case actionTypes.SET_FORECAST_FUTURE_RESPONSE:
            return setForecastFutureResponse(state, action);
        case actionTypes.UPDATE_FORECAST_ARRAY:
            return updateForecastResponseArray(state,action);
        case actionTypes.CLEAR_FORECAST_ARRAY:
            return clearForecastArray(state);
        case actionTypes.SET_FORECAST_DAYS_COUNT:
            return updateForecastDaysCount(state,action);
        default:
            return state;
    }
};
export default reducer
