import * as actionTypes from './actionTypes';

import axios from 'axios';
import * as endPoints from '../../http/endpoints';

const setClientList = (response) => {
    return{
        type:actionTypes.SET_CLIENTS_LIST,
        clients:[]
    }
};

export const getClientDetails = () => {
    return dispatch => {
        axios.get(endPoints.getClientsListEndPoint)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
                dispatch(setClientList(error))
            })
    }
};
