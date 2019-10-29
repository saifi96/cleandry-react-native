import { Action } from "../../core/helpers/ReduxUtils";
import { UserAccountActionTypes } from "../actions/UserAccountActions";
import { eAPIActionStatus } from "../../core/constants/DataEnumbs";
import { CommonStore } from "../stores/CommonStore";
import APICallStore from "../stores/APICallStore";

const UserAccountReducer = (state = new CommonStore(), action: Action) => {

    if (action.payload == null || action.payload == undefined) {
        return state;
    }

    let newState = { ...state };

    switch (action.type) {
        case UserAccountActionTypes.LOGIN_REQUEST:
        case UserAccountActionTypes.REGISTER_REQUEST:
        case UserAccountActionTypes.OTP_VERIFICATION_REQUEST:
            {
                let index = newState.activeAPICalls.findIndex(iAPICall => iAPICall.id == action.type);
                if (index > -1) {
                    newState.activeAPICalls.splice(index, 1);
                }

                let apiCallStore = new APICallStore();
                apiCallStore.id = action.type;
                apiCallStore.status = eAPIActionStatus.Requested;
                apiCallStore.message = action.payload;
                newState.activeAPICalls.push(apiCallStore);
            }
            break;
        case UserAccountActionTypes.LOGIN_SUCCESS:
        case UserAccountActionTypes.REGISTER_SUCCESS:
        case UserAccountActionTypes.OTP_VERIFICATION_SUCCESS:
            {
                let index = newState.activeAPICalls.findIndex(iAPICall => iAPICall.id == action.type);
                if (index > -1) {
                    newState.activeAPICalls[index].status = eAPIActionStatus.Success;
                    newState.activeAPICalls[index].message = action.payload;
                }
            }
            break;
        case UserAccountActionTypes.LOGIN_FAILED:
        case UserAccountActionTypes.REGISTER_FAILED:
        case UserAccountActionTypes.OTP_VERIFICATION_FAILED:
            {
                let index = newState.activeAPICalls.findIndex(iAPICall => iAPICall.id == action.type);
                if (index > -1) {
                    newState.activeAPICalls[index].status = eAPIActionStatus.Failed;
                    newState.activeAPICalls[index].message = action.payload;
                }
            }
        default:
            break;
    }

    return newState;
};

export default UserAccountReducer;