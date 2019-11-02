import { takeLatest, call, takeEvery, put } from "redux-saga/effects";
import { UserAccountActions, UserAccountActionTypes } from "../actions/UserAccountActions";
import APICaller from "../../core/helpers/APICaller";
import { APIActionNames } from "../../core/constants/APIConstants";
import UserData from "../../core/data-objects/UserData";
import { AppGlobalActions } from "../actions/AppGlobalActions";
import APIResultType from "../../core/apis/APIResultType";
import { APICallDetail } from "../states/AppGlobalState";
import { eAPIActionStatus } from "../../core/enums/DataEnums";
import API from "../../core/apis/AppAPIs";



/* #region  Worker Saga */
function* registerRequest(action: any) {
    console.log("register request");

    let apiCallDetail = new APICallDetail();
    apiCallDetail.status = eAPIActionStatus.Requested;
    apiCallDetail.callerId = UserAccountActionTypes.REGISTER_REQUEST;

    put(AppGlobalActions.isLoading(true));
    put(AppGlobalActions.requestAPICall(apiCallDetail.callerId));
    let apiResult: APIResultType = yield call(API.registrationRequest, new UserData());

    apiCallDetail.message = apiResult.msg;

    if (apiResult.success) {
        apiCallDetail.data = apiResult.data;
        apiCallDetail.status = eAPIActionStatus.Success;
        put(AppGlobalActions.successAPICall(apiCallDetail));
    }
    else {
        apiCallDetail.status = eAPIActionStatus.Failed;
        put(AppGlobalActions.failedAPICall(apiCallDetail));
    }

    put(AppGlobalActions.isLoading(false));
}

function* loginRequest() {
    console.log("login request");

    let apiCallDetail = new APICallDetail();
    apiCallDetail.status = eAPIActionStatus.Requested;
    apiCallDetail.callerId = UserAccountActionTypes.LOGIN_REQUEST;

    put(AppGlobalActions.isLoading(true));
    put(AppGlobalActions.requestAPICall(apiCallDetail.callerId));
    let apiResult: APIResultType = yield call(API.loginRequest, "", "");

    apiCallDetail.message = apiResult.msg;

    if (apiResult.success) {
        apiCallDetail.data = apiResult.data;
        apiCallDetail.status = eAPIActionStatus.Success;
        put(AppGlobalActions.successAPICall(apiCallDetail));
    }
    else {
        apiCallDetail.status = eAPIActionStatus.Failed;
        put(AppGlobalActions.failedAPICall(apiCallDetail));
    }

    put(AppGlobalActions.isLoading(false));
}

function* verifyOTP() {
    console.log("verify otp");
}
/* #endregion */



/* #region  Root Watcher */
function* watcherRootSaga() {
    takeLatest(UserAccountActionTypes.LOGIN_REQUEST, loginRequest);
    takeLatest(UserAccountActionTypes.OTP_VERIFICATION_REQUEST, verifyOTP);
    takeLatest(UserAccountActionTypes.REGISTER_REQUEST, registerRequest);
}
/* #endregion */


export default watcherRootSaga;