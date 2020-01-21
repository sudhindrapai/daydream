import * as actionTypes from './actionTypes';

import axios from 'axios';
import * as endpoints from '../../http/endpoints';

let mappingResponseHeader = {
    data: {
        "sheetHeaders": ["header1", "header2", "header3", "header4", "header5"],
        "wfmFields": [
            {
                "fieldName": "header1",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header2",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header3",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header4",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header5",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header6",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header7",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header8",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header9",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header9",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                "fieldName": "header10",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
        ]
    }
};

// let requiredHeaders = {
//     data: {
//         wfmHeaders: [
//             {
//                 id: 1,
//                 label: "header1",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 2,
//                 label: "header2",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 3,
//                 label: "header3",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 4,
//                 label: "header4",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 5,
//                 label: "header5",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 6,
//                 label: "header6",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 7,
//                 label: "header7",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 8,
//                 label: "header8",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 9,
//                 label: "header9",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             },
//             {
//                 id: 10,
//                 label: "header10",
//                 selectedHeader: "",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//             }
//         ],
//         csvFileHeader: [
//             {
//                 value: "header1",
//                 label: "header1"
//             },
//             {
//                 value: "header2",
//                 label: "header2"
//             },
//             {
//                 value: "header3",
//                 label: "header3"
//             },
//             {
//                 value: "header4",
//                 label: "header4"
//             },
//             {
//                 value: "header5",
//                 label: "header5"
//             },
//             {
//                 value: "header6",
//                 label: "header6"
//             },
//             {
//                 value: "header7",
//                 label: "header7"
//             },
//             {
//                 value: "header8",
//                 label: "header8"
//             },
//             {
//                 value: "header9",
//                 label: "header9"
//             },
//             {
//                 value: "header10",
//                 label: "header10"
//             }
//         ]
//     }
// };

const updateFixedHeaders = (response) => {

    let updatedObj = {};

    if (response !== undefined && Object.keys(response).length > 0) {
        let updateWftFieldsArray = [];
        if (response.wfmFields !== undefined && (response.wfmFields).length > 0) {
            for (let i = 0; i < (response.wfmFields).length; i++) {
                let wftObj = (response.wfmFields)[i];
                let tempObj = {};
                tempObj["id"] = i;
                tempObj["label"] = wftObj.fieldName;
                tempObj["selectedHeader"] = "";
                tempObj["description"] = wftObj.description;
                updateWftFieldsArray.push(tempObj);
            }
        }

        updatedObj["fixedHeaders"] = updateWftFieldsArray
    }

    if (response !== undefined && Object.keys(response).length > 0) {
        let importedCsvFileHeader = [];
        if (response.sheetHeaders !== undefined && (response.sheetHeaders).length > 0) {
            for (let j = 0; j < (response.sheetHeaders).length; j++) {
                let csvFileHeaderValue = (response.sheetHeaders)[j].split(" ").join("_");
                let tempObj = {};
                tempObj["value"] = csvFileHeaderValue;
                tempObj["label"] = (response.sheetHeaders)[j];
                importedCsvFileHeader.push(tempObj);
            }
        }
        updatedObj["csvFileHeader"] = importedCsvFileHeader;
    }
    return updatedObj;
};

const updateRequiredHeaders = (mappingResponse) => {
    let updatedHeader = updateFixedHeaders(mappingResponse);
    return {
        type: actionTypes.UPDATE_INTEGRATION_MAPPING_HEADERS,
        fixedHeaders: updatedHeader.fixedHeaders,
        csvFileHeader: updatedHeader.csvFileHeader
    }
};

const toggleIntegrationMappingSpinner = () => {
    return{
        type: actionTypes.TOGGLE_INTEGRATION_MAPPING_LOADER
    }
};

export const getRequiredMappingHeaders = (url) => {
    let sheetObj = {};
    sheetObj["spreadsheetUrl"] = url;

    return dispatch => {
        dispatch(toggleIntegrationMappingSpinner());
        axios.post(endpoints.getIntegrationRequiredHeaderEndPoint, sheetObj)
            .then((response) => {
                dispatch(updateRequiredHeaders(response.data));
            })
            .catch((error) => {
                dispatch(updateRequiredHeaders(mappingResponseHeader.data));
            }).finally(() => {
            dispatch(toggleIntegrationMappingSpinner());
        })
    }
};


export const updateIntegrationMappingFixedHeadersArray = (obj, headersArray) => {
    let updatedHeadersArray = [...headersArray];
    if (obj !== undefined && headersArray !== undefined && updatedHeadersArray.length > 0) {
        for (let headerObj of updatedHeadersArray) {
            if (headerObj !== undefined && Object.keys(headerObj).length > 0) {
                let objId = obj.id;
                let headerObjId = headerObj.id;
                if (objId === headerObjId) {
                    headerObj["selectedHeader"] = obj.selectedHeader;
                    break;
                }
            }
        }
    }
    return {
        type: actionTypes.UPDATE_INTEGRATION_MAPPING_FIXED_HEADERS,
        updatedFixedHeaders: updatedHeadersArray
    }
};


export const postMappedResponse = (mappedArray) => {
    if (mappedArray !== undefined && mappedArray.length > 0) {
        let updatedHeadersArray = [];
        for (let headerObj of mappedArray) {
            if (headerObj !== undefined && Object.keys(headerObj).length > 0) {
                let tempObj = {};
                tempObj["fieldName"] = headerObj.label;
                tempObj["headerName"] = headerObj.selectedHeader;
                tempObj["description"] = headerObj.description;
                updatedHeadersArray.push(tempObj);
            }
        }

        let postRequestObj = {};
        postRequestObj["wfmHeaderMapList"] = updatedHeadersArray;

        return dispatch => {
            axios.post(endpoints.postIntegrationMappingMappedHeadersEndPoint,postRequestObj)
                .then((response) => {
                    console.log(response)
                })
        }
    }
};
