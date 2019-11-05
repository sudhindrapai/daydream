import * as actionTypes from './actionTypes';
import * as HttpEndPoints from '../../http/endpoints';
import axios from 'axios';

let forecastHistoryResponse = {data:{
    "status": "success",
    "message": "Found 730 metrics.",
    "historicalDataList": [
        {
            "timestamp": "2016-12-01T00:00:00.000Z",
            "actual": "6564",
            "predicted": "10153.3065679475",
            "upperBound": "14645.0904214889",
            "lowerBound": "5427.2177099509"
        },
        {
            "timestamp": "2016-12-02T00:00:00.000Z",
            "actual": "6291",
            "predicted": "11280.6584410763",
            "upperBound": "15578.187680595",
            "lowerBound": "6763.1466474919"
        },
        {
            "timestamp": "2016-12-03T00:00:00.000Z",
            "actual": "6292",
            "predicted": "10185.1217553059",
            "upperBound": "14614.33047048",
            "lowerBound": "5832.6137860463"
        },
        {
            "timestamp": "2016-12-04T00:00:00.000Z",
            "actual": "6347",
            "predicted": "7814.3647328421",
            "upperBound": "12304.3007634115",
            "lowerBound": "3598.5784295994"
        },
        {
            "timestamp": "2016-12-05T00:00:00.000Z",
            "actual": "7516",
            "predicted": "6813.1242536348",
            "upperBound": "11170.426039568",
            "lowerBound": "2379.5429002396"
        }
    ]
}};

let forecastFutureResponse = {data:{
    "status": "success",
    "message": "Found 730 metrics.",
    "forecastDataList": [
        {
            "timestamp": "2016-12-06T00:00:00.000Z",
            "actual": null,
            "predicted": "10153.3065679475",
            "upperBound": "14645.0904214889",
            "lowerBound": "5427.2177099509"
        },
        {
            "timestamp": "2016-12-07T00:00:00.000Z",
            "actual": null,
            "predicted": "11280.6584410763",
            "upperBound": "15578.187680595",
            "lowerBound": "6763.1466474919"
        },
        {
            "timestamp": "2016-12-08T00:00:00.000Z",
            "actual": null,
            "predicted": "10185.1217553059",
            "upperBound": "14614.33047048",
            "lowerBound": "5832.6137860463"
        },
        {
            "timestamp": "2016-12-09T00:00:00.000Z",
            "actual": null,
            "predicted": "7814.3647328421",
            "upperBound": "12304.3007634115",
            "lowerBound": "3598.5784295994"
        },
        {
            "timestamp": "2016-12-10T00:00:00.000Z",
            "actual": null,
            "predicted": "6813.1242536348",
            "upperBound": "11170.426039568",
            "lowerBound": "2379.5429002396"
        }
    ]
}};


const objToArray = (response) => {
    let graphPointsObj = {};

    let x = [],
        y = [],
        yHat = [],
        yUpper = [],
        yLower = [];

    if (response !== undefined && response.length > 0) {
        for (let i=0;i<response.length; i++) {

            let graphObj = response[i];

            if (graphObj.timestamp !== undefined && graphObj.timestamp !== null && graphObj.timestamp !== "") {
                let date = (graphObj.timestamp.toString()).split("T")[0];
                x.push(date);
            }

            if (graphObj.actual !== undefined && graphObj.actual !== null && graphObj.actual !== "") {
                y.push(parseInt(graphObj.actual));
            }

            if (graphObj.predicted !== undefined && graphObj.predicted !== null && graphObj.predicted !== "") {
                yHat.push(parseInt(graphObj.predicted));
            }

            if (graphObj.upperBound !== undefined && graphObj.upperBound !== null && graphObj.upperBound !== "") {
                yUpper.push(parseInt(graphObj.upperBound));
            }

            if (graphObj.lowerBound !== undefined && graphObj.lowerBound !== null && graphObj.lowerBound !== "") {
                yLower.push(parseInt(graphObj.lowerBound));
            }
        }
        graphPointsObj["x"] = x;
        graphPointsObj["actual"] = y;
        graphPointsObj["predicted"] = yHat;
        graphPointsObj["upperBound"] = yUpper;
        graphPointsObj["lowerBound"] = yLower
    }
    return graphPointsObj
};

const setForecastHistoryResponse = (response,graphMetric) => {
    let historyArray = objToArray(response);
    return{
        type: actionTypes.SET_FORECAST_HISTORY_RESPONSE,
        historyValues: historyArray,
        responseFor: graphMetric
    }
};

const setForecastFutureResponse = (response,graphMetric) => {
    let futureArray = objToArray(response);
    return{
        type: actionTypes.SET_FORECAST_FUTURE_RESPONSE,
        futureValues: futureArray,
        responseFor:graphMetric
    }
};

const updateForecastArray = (arrayName,arrayIndex) => {
    return{
        type:actionTypes.UPDATE_FORECAST_ARRAY,
        arrayName:arrayName,
        sortIndex:arrayIndex
    }
};

export const getForecastFutureResponse = (daysCount,accountType,graphmetric,arrayIndex) => {
    let getFuturePayloadObj = {};
    getFuturePayloadObj["account"] = accountType;
    getFuturePayloadObj["period"] = daysCount;
    getFuturePayloadObj["metric"] = graphmetric;
    return dispatch => {
        axios.post(HttpEndPoints.getForecastFutureEndPoint,getFuturePayloadObj)
            .then((response) => {
                dispatch(setForecastFutureResponse(response.data.forecastDataList,graphmetric));
                if (graphmetric !== undefined) {
                    dispatch(updateForecastArray(graphmetric,arrayIndex));
                }
            })
            .catch((error) => {
                console.log(error);

                dispatch(setForecastFutureResponse(forecastFutureResponse.data.forecastDataList, graphmetric));
                if (graphmetric !== undefined) {
                    dispatch(updateForecastArray(graphmetric,arrayIndex));
                }


            });
    }
};


export const getForecastHistoryResponse = (daysCount,accountType,graphmetric, arrayIndex) => {
    let getHistoryPayloadObj = {};
    getHistoryPayloadObj["account"] = accountType;
    getHistoryPayloadObj["period"] = daysCount;
    getHistoryPayloadObj["metric"] = graphmetric;
    return dispatch => {
        if (arrayIndex === 0) {
            dispatch(clearForecastResponseArray());
        }
        axios.post(HttpEndPoints.getForecastHistoryEndPoint,getHistoryPayloadObj)
            .then((response) => {
                console.log(response);
                dispatch(setForecastHistoryResponse(response.data.historicalDataList, graphmetric));
                if (graphmetric !== undefined) {
                    dispatch(updateForecastArray(graphmetric,arrayIndex));
                }
            })
            .catch((error) => {
               console.log(error);

                dispatch(setForecastHistoryResponse(forecastHistoryResponse.data.historicalDataList, graphmetric));
                if (graphmetric !== undefined) {
                    dispatch(updateForecastArray(graphmetric,arrayIndex));
                }


            });
    }
};

export const setForecastDaysCount = (daysCount) => {
    return{
        type: actionTypes.SET_FORECAST_DAYS_COUNT,
        daysCount: daysCount
    }

};

export const clearForecastResponseArray = () => {
    return{
        type: actionTypes.CLEAR_FORECAST_ARRAY,
    }
};

