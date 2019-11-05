import * as actions from './actionTypes';
import axios from 'axios';
import * as HTTPEndPoints from '../../http/endpoints';

const metricsListResponse =
    {
        status: "success",
        message: "error message",
        metrics: ["TOTAL_CALLS", "TOTAL_CALLS_DURATION", "TOTAL_ABANDONED_CALLS", "AVG_HANDLE_TIME", "AVG_AGENT_HEAD_COUNT", "AVG_AFTER_CALL_WORK", "AVG_OCCUPANCY_RATE", "AVG_UTILIZATION_RATE", "AVG_SHRINKAGE_RATE"]
    };

const metricsDetailResponse = {
    status: "success",
    message: "error message from metricsDetailResponse",
    "graphDetails": {
        "2017-03": "1",
        "2017-04": "100",
        "2017-05": "60",
        "2017-01": "10",
        "2017-02": "5"
    },
    "metricValue": "100000",
    "growthValue": null,
    "name": "Total Calls",
    "description": "Total calls for a given period"
};

export const onApplyDateRangeInAnalytics = (dateRangeObj) => {
    return {
        type: actions.ON_APPLY_DATE_RANGE_ANALYTICS,
        dateRange: dateRangeObj
    }
};

const updateAndSetAnalyticsDate = (response, arrayIndex) => {

    let graphDetailObj = response.graphDetails;
    let xAxisValues = Object.keys(graphDetailObj);
    let yAxisValues = Object.values(graphDetailObj);
    let metricsCount = response.metricValue;
    let chartLabel = response.name ;
    let cardDescription = response.description;

    let updatedResponseObj = {};
    updatedResponseObj["xAxisValues"] = xAxisValues;
    updatedResponseObj["yAxisValues"] = yAxisValues;
    updatedResponseObj["metricsCount"] = metricsCount;
    updatedResponseObj["label"] = chartLabel ;
    updatedResponseObj["description"] = cardDescription;
    updatedResponseObj["sortValue"] = parseInt(arrayIndex);

    return {
        type: actions.UPDATE_ANALYTICS_RESPONSE,
        updatedObj: updatedResponseObj,
    }
};

export const getAnalyticsDetail = (metricsValue, accountType, startDate, endDate, arrayIndex) => {
    let getMetricsDetailRequestObj = {};
    getMetricsDetailRequestObj["startDateTime"] = startDate;
    getMetricsDetailRequestObj["endDateTime"] = endDate;
    getMetricsDetailRequestObj["metricType"] = metricsValue;
    getMetricsDetailRequestObj["account"] = accountType;
    return dispatch => {
        axios.post(HTTPEndPoints.getMetricsDetailEndPoint, getMetricsDetailRequestObj)
            .then((response) => {
                let responseObj = response.data;
                let responseStatus = responseObj.status;
                let isSuccess = (/success/i).test(responseStatus);

                if (isSuccess) {
                    dispatch(updateAndSetAnalyticsDate(response.data, arrayIndex));
                } else {
                    dispatch(logError(responseObj.message));
                    dispatch(toggleAnalyticsErrorView());
                }
            })
            .catch((error) => {
                console.log(error);

                let responseObj = metricsDetailResponse;
                let responseStatus = responseObj.status;
                let isSuccess = (/success/i).test(responseStatus);
                if (isSuccess) {
                    dispatch(updateAndSetAnalyticsDate(responseObj, arrayIndex));
                } else {
                    dispatch(logError(responseObj.message));
                    dispatch(toggleAnalyticsErrorView());
                }

            });
    }
};

const clearArray = () => {
    return {
        type: actions.CLEAR_ANALYTICS_ARRAY
    }
};

const logError = (errorMessage) => {
    return{
        type: actions.LOG_ANALYTICS_ERROR,
        errorMessage: errorMessage
    }
};

export const toggleAnalyticsErrorView = () => {
    return {
        type: actions.TOGGLE_ANALYTICS_ERROR_VIEW
    }
};

export const getAnalyticsMetrics = (accountType, startDate, endDate) => {
    return dispatch => {
        axios.get(HTTPEndPoints.getMetricsListEndPoint)
            .then((response) => {
                if (response.data !== undefined && Object.keys(response.data).length > 0) {
                    let responseObj = response.data;
                    let responseStatus = responseObj.status;
                    let isSuccess = (/success/i).test(responseStatus);
                    if (isSuccess) {
                        let responseArray = (response.data).metrics;
                        for (let i = 0; i < responseArray.length; i++) {
                            let metricsValue = responseArray[i];
                            if (i === 0) {
                                dispatch(clearArray())
                            }
                            dispatch(getAnalyticsDetail(metricsValue, accountType, startDate, endDate, i));
                        }
                    } else {
                        dispatch(logError(responseObj.message));
                        dispatch(toggleAnalyticsErrorView());
                    }
                }
            })
            .catch((error) => {
                console.log(error);


                let responseStatus = metricsListResponse.status;
                let isSuccess = (/success/i).test(responseStatus);
                if (isSuccess) {
                    let responseArray = metricsListResponse.metrics;
                    for (let i = 0; i < responseArray.length; i++) {
                        let metricsValue = responseArray[i];
                        if (i === 0) {
                            dispatch(clearArray())
                        }
                        dispatch(getAnalyticsDetail(metricsValue, accountType, startDate, endDate, i))
                    }
                } else {
                    dispatch(logError(metricsListResponse.message));
                    dispatch(toggleAnalyticsErrorView());
                }

            })
    }
};
