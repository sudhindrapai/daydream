import * as actions from './actionTypes';
import * as apiEndPoints from '../../http/endpoints';
import axios from 'axios';

export const setHeaderValues = (response) => {
  return{
      type: actions.SET_HEADER_VALUES,
      headerObj: response
  }
};

export const getHeaderValues = () => {
    return dispatch => {
        axios.get(apiEndPoints.getHeaderValues)
            .then((response) => {
                dispatch(setHeaderValues(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(setHeaderValues(error));
            })
    }
};


export const updateAccountType = (accountType) => {
    return{
        type: actions.UPDATE_ACCOUNT_TYPE,
        accountType: accountType
    }
};
