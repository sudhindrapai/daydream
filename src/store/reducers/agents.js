import * as actionType from '../actions/actionTypes';

let initialState = {
    agentListArray:[]
};

const loadAgentList = (state,action) => {
    return{
        ...state,
        agentListArray: action.agentListArray
    }
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionType.LOAD_AGENT_LIST:
            return loadAgentList(state,action);
        default:
            return state;
    }
};

export default reducer
