import { Action } from "../../core/helpers/ReduxUtils";
import { UserAccountActionTypes } from "../actions/UserAccountActions";
import { eAPIActionStatus } from "../../core/constants/DataEnumbs";
import { UserAccountState } from "../states/UserAccountState";
import AppGlobalState, { APICallDetail } from "../states/AppGlobalState";
import { AppGlobalActionTypes } from "../actions/AppGlobalActions";

const initialState: AppGlobalState = {
    activeAPICalls: new Array<APICallDetail>(),
    isAppDataLoaded: false,
    isLoading: false,
    isLoggedInUser: false
}

const AppGlobalReducer = (state = initialState, action: Action): AppGlobalState => {

    if (action.payload == null || action.payload == undefined) {
        return state;
    }

    let newState = { ...state };

    switch (action.type) {
        case AppGlobalActionTypes.REQUEST_API_CALL:
            {
                let index = newState.activeAPICalls.findIndex(iAPICall => iAPICall.callerId == action.payload);
                if (index > -1) {
                    newState.activeAPICalls.splice(index, 1);
                }

                let apiCallDetail = new APICallDetail();
                apiCallDetail.callerId = action.payload;
                apiCallDetail.status = eAPIActionStatus.Requested;
                apiCallDetail.message = action.payload;
                newState.activeAPICalls.push(apiCallDetail);
            }
            break;
        case AppGlobalActionTypes.SUCCESS_API_CALL:
            {
                let index = newState.activeAPICalls.findIndex(iAPICall => iAPICall.callerId == action.payload);
                if (index > -1) {
                    newState.activeAPICalls[index].status = eAPIActionStatus.Success;
                    newState.activeAPICalls[index].message = action.payload;
                }
            }
            break;
        case AppGlobalActionTypes.FAILED_API_CALL:
            {
                let index = newState.activeAPICalls.findIndex(iAPICall => iAPICall.callerId == action.payload);
                if (index > -1) {
                    newState.activeAPICalls[index].status = eAPIActionStatus.Failed;
                    newState.activeAPICalls[index].message = action.payload;
                }
            }
            break;
        case AppGlobalActionTypes.IS_LOADING:
            newState.isLoading = action.payload;
            break;
        case AppGlobalActionTypes.IS_LOGGEDIN_USER:
            newState.isLoggedInUser = action.payload;
            break;
        case AppGlobalActionTypes.IS_APP_DATA_LOADED:
            newState.isAppDataLoaded = action.payload;
            break;
        default:
            break;
    }

    return newState;
};

export default AppGlobalReducer;