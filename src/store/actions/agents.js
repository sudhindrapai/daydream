import * as actionTypes from './actionTypes';


let agents = [
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-1"
    },
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-2"
    },
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-3"
    },
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-4"
    },
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-5"
    },
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-6"
    },
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-7"
    },
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-8"
    },
    {
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-9"
    },{
        imgUrl:"https://dummyimage.com/100x100/cccccc/000000",
        name:"Agent-10"
    }
];

export const loadAgentList = () => {
    return{
        type:actionTypes.LOAD_AGENT_LIST,
        agentListArray:agents
    }
};
