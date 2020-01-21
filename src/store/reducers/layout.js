import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAdminViewLoaded: false
};

const updateAdminView = (state,action) => {
    return{
        ...state,
        isAdminViewLoaded: action.isAdminViewLoaded
    }
};

let reducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_ADMIN_VIEW:
            return updateAdminView(state,action);
        default:
            return state
    }
};

export default reducer
