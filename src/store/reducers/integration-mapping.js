import * as actionTypes from '../actions/actionTypes';

let initialState = {
    isLoaderVisible:false,
    requiredHeaders:[],
    uploadedFileHeaders:[]
};

const updateRequiredHeaders = (state,action) => {
    return{
        ...state,
        requiredHeaders:action.fixedHeaders,
        uploadedFileHeaders:action.csvFileHeader
    }
};

const updateFixedHeaders = (state,action) => {
    return{
        ...state,
        requiredHeaders:action.updatedFixedHeaders
    }
};

const toggleIntegrationMappingLoader = (state) => {
    return{
        ...state,
        isLoaderVisible: !(state.isLoaderVisible)
    }
};

const reducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.UPDATE_INTEGRATION_MAPPING_HEADERS:
            return updateRequiredHeaders(state,action);
        case actionTypes.UPDATE_INTEGRATION_MAPPING_FIXED_HEADERS:
            return updateFixedHeaders(state,action);
        case actionTypes.TOGGLE_INTEGRATION_MAPPING_LOADER:
            return toggleIntegrationMappingLoader(state);
        default:
            return state;
    }
};

export default reducer;
