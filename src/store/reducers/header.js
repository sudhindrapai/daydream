import * as actionTypes from '../actions/actionTypes';

const initialState = {
    accountType: "S",
    profileImgObj: "",
    accounts: [],
    calendarNotificationCount: 0,
    notificationsCount: 0
};

let headerResponse = {"status":"success","message":"success","notificationCount":"1","accounts":["ACCOUNT S","ACCOUNT P","ACCOUNT l"],"username":"swathi@intelligent.services","name":"swathi"};

const updateHeaderValues = (state, action) => {
    return {
        ...state,
        profileImgObj: {
            imgUrl: "https://dummyimage.com/100x100/777777/ffffff",
            name: "Sudhindra Pai",
            emailId: "sudhindra@gmail.com"
        },
        calendarNotificationCount: 12,
        notificationsCount: 14
    }
};

const setHeaderResponse = (state, action) => {
    let responseObj = action.headerObj;
    // responseObj = headerResponse;
    let imgUrl = "https://dummyimage.com/100x100/777777/ffffff",
        name = "",
        emailId = "",
        notificationCount = 0;

    if (responseObj !== undefined && Object.keys(responseObj).length > 0) {

        if (responseObj.name !== undefined && responseObj.name !== null) {
            name = responseObj.name;
        }

        if (responseObj.username !== undefined && responseObj.username !== null) {
            emailId = responseObj.username;
        }

        if(responseObj.notificationCount !== undefined && responseObj.notificationCount !== null) {
            notificationCount = responseObj.notificationCount
        }
    }

    let profileImgObj = {};
    profileImgObj["imgUrl"] = imgUrl;
    profileImgObj["name"] = name;
    profileImgObj["emailId"] = emailId;

    let updatedAccounts = (responseObj.accounts).map((accountType) => {
            let account = (accountType.trim()).toUpperCase();
            let obj = {};
            obj["label"] = account.split(" ").join("-");
            return obj;
    });

  return{
      ...state,
      profileImgObj:profileImgObj,
      accounts:updatedAccounts,
      calendarNotificationCount: 0,
      notificationsCount: notificationCount
  }
};

const updateAccountType = (state,action) => {
    let accountType = (action.accountType).split("-")[1];
    return{
        ...state,
        accountType: accountType
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HEADER_VALUES:
            return updateHeaderValues(state,action);
        case actionTypes.SET_HEADER_VALUES:
            return setHeaderResponse(state,action);
        case actionTypes.UPDATE_ACCOUNT_TYPE:
            return updateAccountType(state,action);
        default:
            return state
    }
};

export default (reducer)
