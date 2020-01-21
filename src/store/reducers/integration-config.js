import * as actionTypes from '../actions/actionTypes';

let initialState = {
    integrationStatusMessage:""
};

const updateMessage = (state,action) => {
    return{
        ...state,
        integrationStatusMessage: action.Message
    }
};

let reducer = (state,action) => {
    switch (action.type) {
        case actionTypes.UPDATE_INTEGRATION_STATUS:
          return updateMessage(state,action);
        default:
            return state
    }
};

export default reducer;
