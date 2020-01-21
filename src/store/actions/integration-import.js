import * as actionType from './actionTypes';

import axios from 'axios';
import * as endPoints from '../../http/endpoints';

let fileUploadResponse  ={
    data:{"status":"success",
        "message":"UnabletoaccesstheGoogleSheetsURL.Pleasegive\"Edit\"accessinGoogleSheets.OpenFile>ClickonShare>Addemail \"daydream-sheets-access@white-library-249714.iam.gserviceaccount.com\"andclickon\"Send\".Clickon\"Learn More\"formoreinformation.",
        "sheetName":"selected sheet name"}
};

const updateSheetNameMessage = (message,isValidUrl,sheetName) => {
    return{
        type: actionType.UPDATE_GET_SHEET_NAME_MESSAGE,
        message:message,
        sheetName:sheetName,
        isInvalidFile: isValidUrl !== "success",
        isRefreshBtnVisible: isValidUrl !== "success"
    }
};

export const clearFileImportMessage = () => {
    return{
        type: actionType.CLEAR_GET_SHEET_NAME_MESSAGE
    }
};

export const updateSheetUrl = (sheetUrl) => {
    return{
        type:actionType.UPDATE_INTEGRATION_MAPPING_UPDATE_URL,
        updatedUrl:sheetUrl
    }
};

const toggleIntegrationImportLoader = () => {
    return{
        type: actionType.TOGGLE_INTEGRATION_IMPORT_LOADER
    }
};


export const getSheetName = (sheetUrl) => {
    let sheetLinkObj = {
        "spreadsheetUrl":sheetUrl
    };
  return dispatch => {
      dispatch(toggleIntegrationImportLoader());
      axios.post(endPoints.getSheetNameRequest, sheetLinkObj)
          .then((response) => {
              let responseObj = response.data;
              dispatch(updateSheetUrl(sheetUrl));
              dispatch(updateSheetNameMessage(responseObj.message,responseObj.status,responseObj.sheetName));
          })
          .catch((error) => {
              dispatch(updateSheetUrl(sheetUrl));
              dispatch(updateSheetNameMessage(fileUploadResponse.data.message, fileUploadResponse.data.status,
                  fileUploadResponse.data.sheetName));
          }).finally(() => {
          dispatch(toggleIntegrationImportLoader());
      })
  }
};
