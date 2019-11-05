import * as actionTypes from '../actions/actionTypes';

let initialState = {
    anomaliesRequestMetrics:['TOTAL_CALLS','AVG_HANDLE_TIME','AVG_AGENT_HEAD_COUNT'],
    isLoading: true,
    anomaliesResponse:[],
};

const setAnomaliesResponse = (state,action) => {
    let updatedArray = [...state.anomaliesResponse].concat(action.anomaliesGraphObj);
    let sortedAnomaliesArray = updatedArray;
    if (updatedArray.length > 1) {
        sortedAnomaliesArray = updatedArray.sort((obj1, obj2) => {
            return (obj1.sortIndex) - (obj2.sortIndex)
        });
    }
    return{
        ...state,
        anomaliesResponse:sortedAnomaliesArray
    }
};

const clearAnomaliesResponse = (state) => {
    return{
        ...state,
        anomaliesResponse: []
    }
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ANOMALIES_RESPONSE:
            return setAnomaliesResponse(state,action);
        case actionTypes.CLEAR_ANOMALIES_RESPONSE:
            return clearAnomaliesResponse(state);
        default:
            return state
    }
};

export default reducer
