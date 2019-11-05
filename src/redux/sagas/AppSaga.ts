import { takeLatest, call, takeEvery, put, take } from "redux-saga/effects";
import { UserAccountActions, UserAccountActionTypes } from "../actions/UserAccountActions";
import APICaller from "../../core/helpers/APICaller";
import { APIActionNames } from "../../core/constants/APIConstants";
import UserData from "../../core/data-objects/UserData";
import { AppGlobalActions } from "../actions/AppGlobalActions";
import APIResultType from "../../core/apis/APIResultType";
import { APICallDetail } from "../states/AppGlobalState";
import { eAPIActionStatus } from "../../core/enums/DataEnums";
import API from "../../core/apis/AppAPIs";
import { ServiceActionTypes, ServiceActions } from "../actions/ServiceActions";
import ServiceData from "../../core/data-objects/ServiceData";



/* #region  Worker Saga */
function* registerNewUser() {
    console.log("register request");

    let apiCallDetail = new APICallDetail();
    apiCallDetail.status = eAPIActionStatus.Requested;
    apiCallDetail.callerId = UserAccountActionTypes.API_REGISTER_USER_REQUEST;

    put(AppGlobalActions.isLoading(true));
    put(AppGlobalActions.requestAPICall(apiCallDetail.callerId));
    let apiResult = yield call(API.registrationRequest, new UserData());

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
    apiCallDetail.callerId = UserAccountActionTypes.API_LOGIN_REQUEST;

    put(AppGlobalActions.isLoading(true));
    put(AppGlobalActions.requestAPICall(apiCallDetail.callerId));
    let apiResult = yield call(API.loginRequest, "", "");

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

function* getAllServices() {

    let apiCallDetail = new APICallDetail();
    apiCallDetail.status = eAPIActionStatus.Requested;
    apiCallDetail.callerId = ServiceActionTypes.API_GET_SERVICES_REQUEST;

    put(AppGlobalActions.isLoading(true));
    put(AppGlobalActions.requestAPICall(apiCallDetail.callerId));
    let apiResult: APIResultType<Array<ServiceData>> = yield call(API.getAllServices);

    apiCallDetail.message = apiResult.msg;
    if (apiResult.success) {
        apiCallDetail.data = apiResult.data;
        apiCallDetail.status = eAPIActionStatus.Success;
        yield put(AppGlobalActions.successAPICall(apiCallDetail));
        yield put(ServiceActions.storeServices(apiResult.data));
    }
    else {
        apiCallDetail.status = eAPIActionStatus.Failed;
        put(AppGlobalActions.failedAPICall(apiCallDetail));
    }

    put(AppGlobalActions.isAppDataLoaded(true));
    put(AppGlobalActions.isLoading(false));

}
/* #endregion */



/* #region  Root Watcher */
function* watcherRootSaga() {
    console.log("Wacher saga called");
    yield takeLatest(UserAccountActionTypes.API_LOGIN_REQUEST, loginRequest);
    yield takeLatest(UserAccountActionTypes.API_OTP_VERIFICATION_REQUEST, verifyOTP);
    yield takeLatest(UserAccountActionTypes.API_REGISTER_USER_REQUEST, registerNewUser);
    yield takeLatest(ServiceActionTypes.API_GET_SERVICES_REQUEST, getAllServices);
}
/* #endregion */


export default watcherRootSaga;