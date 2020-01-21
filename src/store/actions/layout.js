import * as actionType from './actionTypes';

export const changeAdminView = (isAdminView) => {
    return{
        type: actionType.TOGGLE_ADMIN_VIEW,
        isAdminViewLoaded:isAdminView
    }
};
