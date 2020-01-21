import * as actionTypes from '../actions/actionTypes';

let initialState = {
    isLoaderIsVisible: false,
    getSheetNameMessage: "",
    sheetName:"",
    importedSheetUrl:"",
    isInvalidFileUrl:true,
    isRefreshBtnVisible:false
};

const updateSheetNameMessage = (state,action) => {
    return{
        ...state,
        getSheetNameMessage: action.message,
        sheetName:action.sheetName,
        isInvalidFileUrl:action.isInvalidFile,
        isRefreshBtnVisible:action.isRefreshBtnVisible
    }
};

const clearFileImportMessage = (state) => {
    return{
        ...state,
        getSheetNameMessage:"",
        sheetName:"",
        isInvalidFileUrl:true,
        isRefreshBtnVisible:false
    }
};

const updateSheetUrl = (state,action) => {
    return{
        ...state,
        importedSheetUrl:action.updatedUrl
    }
};

const toggleIntegrationImportLoader = (state) => {
    return{
        ...state,
        isLoaderIsVisible: !(state.isLoaderIsVisible)
    }
};

let reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.UPDATE_GET_SHEET_NAME_MESSAGE:
            return updateSheetNameMessage(state,action);
        case actionTypes.CLEAR_GET_SHEET_NAME_MESSAGE:
            return clearFileImportMessage(state);
        case actionTypes.UPDATE_INTEGRATION_MAPPING_UPDATE_URL:
            return updateSheetUrl(state,action);
        case actionTypes.TOGGLE_INTEGRATION_IMPORT_LOADER:
            return toggleIntegrationImportLoader(state);
        default:
            return state
    }
};

export default reducer;
