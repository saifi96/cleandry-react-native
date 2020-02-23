import { takeLatest, call, takeEvery, put, take } from "redux-saga/effects";
import { UserAccountActionTypes } from "../actions/UserAccountActions";
import UserModel from "../../core/models/UserModel";
import { AppGlobalActions, AppGlobalActionTypes } from "../actions/AppGlobalActions";
import APIResultType from "../../core/apis/APIResultType";
import { APICallDetail } from "../states/AppGlobalState";
import { eAPIActionStatus } from "../../core/enums/DataEnums";
import API from "../../core/apis/AppAPIs";
import { ServiceActionTypes, ServiceActions } from "../actions/ServiceActions";
import ServiceModel from "../../core/models/ServiceModel";
import ServiceUnitModel from "../../core/models/ServiceUnitModel";
import BannerModel from "../../core/models/BannerModel";



//#region Worker sage
function* loadAppInitialData() {

    yield put(AppGlobalActions.isLoading(true));

    //#region Get all services
    yield call(getAllServices);
    //#endregion

    //#region Get all service units
    yield call(getAllServiceUnits);
    //#endregion

    //#region Get app banners
    yield call(getAppBanners)
    //#endregion

    yield put(AppGlobalActions.isAppDataLoaded(true));
    yield put(AppGlobalActions.isLoading(false));
}

function* registerNewUser() {

    let apiCallDetail = new APICallDetail();
    apiCallDetail.status = eAPIActionStatus.Requested;
    apiCallDetail.callerId = UserAccountActionTypes.API_REGISTER_USER_REQUEST;

    put(AppGlobalActions.isLoading(true));
    put(AppGlobalActions.requestAPICall(apiCallDetail.callerId));
    let apiResult = yield call(API.registrationRequest, new UserModel());

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

    yield put(AppGlobalActions.isLoading(true));
    const callDetailServices = new APICallDetail();
    callDetailServices.status = eAPIActionStatus.Requested;
    callDetailServices.callerId = ServiceActionTypes.API_GET_SERVICES_REQUEST;

    yield put(AppGlobalActions.requestAPICall(callDetailServices.callerId));
    const callResultServices: APIResultType<ServiceModel[]> = yield call(API.getAllServices);

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
    yield put(AppGlobalActions.isLoading(false));
}

function* getAllServiceUnits() {

    yield put(AppGlobalActions.isLoading(true));
    const callDetailClothTypes = new APICallDetail();
    callDetailClothTypes.status = eAPIActionStatus.Requested;
    callDetailClothTypes.callerId = ServiceActionTypes.API_GET_CLOTH_TYPES_REQUEST;

    yield put(AppGlobalActions.requestAPICall(callDetailClothTypes.callerId));
    const callResultClothTypes: APIResultType<Array<ServiceUnitModel>> = yield call(API.getAllclothTypes);

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
    yield put(AppGlobalActions.isLoading(false));

}

function* getAppBanners() {
    yield put(AppGlobalActions.isLoading(true));
    const bannerAPICallDetail = new APICallDetail();
    bannerAPICallDetail.status = eAPIActionStatus.Requested;
    bannerAPICallDetail.callerId = AppGlobalActionTypes.APP_BANNERS;

    yield put(AppGlobalActions.requestAPICall(bannerAPICallDetail.callerId));
    const bannerAPICallResult: APIResultType<BannerModel[]> = yield call(API.getAppBanners);

    bannerAPICallDetail.message = bannerAPICallResult.msg
    if (bannerAPICallResult.success) {
        bannerAPICallDetail.status = bannerAPICallResult.success
        bannerAPICallDetail.data = bannerAPICallResult.data
        yield put(AppGlobalActions.successAPICall(bannerAPICallDetail));
        yield put(AppGlobalActions.storeAppBanners(bannerAPICallResult.data));
    } else {
        bannerAPICallDetail.status = eAPIActionStatus.Failed;
        yield put(AppGlobalActions.failedAPICall(bannerAPICallDetail));
    }
    yield put(AppGlobalActions.isLoading(false));
}
//#endregion


/* #region  Root Watcher */
function* watcherRootSaga() {
    yield takeLatest(AppGlobalActionTypes.LOAD_APP_INITIAL_DATA, loadAppInitialData);
    yield takeLatest(UserAccountActionTypes.API_LOGIN_REQUEST, loginRequest);
    yield takeLatest(UserAccountActionTypes.API_OTP_VERIFICATION_REQUEST, verifyOTP);
    yield takeLatest(UserAccountActionTypes.API_REGISTER_USER_REQUEST, registerNewUser);
    yield takeLatest(ServiceActionTypes.API_GET_SERVICES_REQUEST, getAllServices);
    yield takeLatest(ServiceActionTypes.API_GET_CLOTH_TYPES_REQUEST, getAllServiceUnits);
}
/* #endregion */


export default watcherRootSaga;