import { takeLatest, call, takeEvery, put, take } from "redux-saga/effects";
import { UserAccountActionTypes } from "../actions/UserAccountActions";
import UserData from "../../core/data-objects/UserData";
import { AppGlobalActions, AppGlobalActionTypes } from "../actions/AppGlobalActions";
import APIResultType from "../../core/apis/APIResultType";
import { APICallDetail } from "../states/AppGlobalState";
import { eAPIActionStatus } from "../../core/enums/DataEnums";
import API from "../../core/apis/AppAPIs";
import { ServiceActionTypes, ServiceActions } from "../actions/ServiceActions";
import ServiceData from "../../core/data-objects/ServiceData";
import ClothTypeData from "../../core/data-objects/ClothTypeData";



/* #region  Worker Saga */

function* loadAppInitialData() {

    yield put(AppGlobalActions.isLoading(true));

    /* #region  Get all services */
    let callDetailServices = new APICallDetail();
    callDetailServices.status = eAPIActionStatus.Requested;
    callDetailServices.callerId = ServiceActionTypes.API_GET_SERVICES_REQUEST;

    yield put(AppGlobalActions.requestAPICall(callDetailServices.callerId));
    let callResultServices: APIResultType<Array<ServiceData>> = yield call(API.getAllServices);

    callDetailServices.message = callResultServices.msg;
    if (callResultServices.success) {
        callDetailServices.data = callResultServices.data;
        callDetailServices.status = eAPIActionStatus.Success;
        yield put(AppGlobalActions.successAPICall(callDetailServices));
        yield put(ServiceActions.storeServices(callResultServices.data));
    }
    else {
        callDetailServices.status = eAPIActionStatus.Failed;
        yield put(AppGlobalActions.failedAPICall(callDetailServices));
    }
    /* #endregion */

    /* #region  Get all cloth types */
    let callDetailClothTypes = new APICallDetail();
    callDetailClothTypes.status = eAPIActionStatus.Requested;
    callDetailClothTypes.callerId = ServiceActionTypes.API_GET_CLOTH_TYPES_REQUEST;

    yield put(AppGlobalActions.requestAPICall(callDetailClothTypes.callerId));
    let callResultClothTypes: APIResultType<Array<ClothTypeData>> = yield call(API.getAllclothTypes);

    callDetailClothTypes.message = callResultClothTypes.msg;
    if (callResultClothTypes.success) {
        callDetailClothTypes.data = callResultClothTypes.data;
        callDetailClothTypes.status = eAPIActionStatus.Success;
        yield put(AppGlobalActions.successAPICall(callDetailClothTypes));
        yield put(ServiceActions.storeClothTypes(callResultClothTypes.data));
    }
    else {
        callDetailClothTypes.status = eAPIActionStatus.Failed;
        yield put(AppGlobalActions.failedAPICall(callDetailClothTypes));
    }
    /* #endregion */

    yield put(AppGlobalActions.isAppDataLoaded(true));
    yield put(AppGlobalActions.isLoading(false));
}

function* registerNewUser() {

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

    yield put(AppGlobalActions.isLoading(true));
    yield put(AppGlobalActions.requestAPICall(apiCallDetail.callerId));
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
        yield put(AppGlobalActions.failedAPICall(apiCallDetail));
    }
    yield put(AppGlobalActions.isLoading(false));

}

function* getAllClothTypes() {

    let apiCallDetail = new APICallDetail();
    apiCallDetail.status = eAPIActionStatus.Requested;
    apiCallDetail.callerId = ServiceActionTypes.API_GET_CLOTH_TYPES_REQUEST;

    yield put(AppGlobalActions.isLoading(true));
    yield put(AppGlobalActions.requestAPICall(apiCallDetail.callerId));
    let apiResult: APIResultType<Array<ClothTypeData>> = yield call(API.getAllclothTypes);

    apiCallDetail.message = apiResult.msg;
    if (apiResult.success) {
        apiCallDetail.data = apiResult.data;
        apiCallDetail.status = eAPIActionStatus.Success;
        yield put(AppGlobalActions.successAPICall(apiCallDetail));
        yield put(ServiceActions.storeClothTypes(apiResult.data));
    }
    else {
        apiCallDetail.status = eAPIActionStatus.Failed;
        yield put(AppGlobalActions.failedAPICall(apiCallDetail));
    }
    yield put(AppGlobalActions.isLoading(false));
}

/* #endregion */



/* #region  Root Watcher */
function* watcherRootSaga() {
    yield takeLatest(AppGlobalActionTypes.LOAD_APP_INITIAL_DATA, loadAppInitialData);
    yield takeLatest(UserAccountActionTypes.API_LOGIN_REQUEST, loginRequest);
    yield takeLatest(UserAccountActionTypes.API_OTP_VERIFICATION_REQUEST, verifyOTP);
    yield takeLatest(UserAccountActionTypes.API_REGISTER_USER_REQUEST, registerNewUser);
    yield takeLatest(ServiceActionTypes.API_GET_SERVICES_REQUEST, getAllServices);
    yield takeLatest(ServiceActionTypes.API_GET_CLOTH_TYPES_REQUEST, getAllClothTypes);
}
/* #endregion */


export default watcherRootSaga;