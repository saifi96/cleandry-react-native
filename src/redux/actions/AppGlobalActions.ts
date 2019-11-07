import { APICallDetail } from "../states/AppGlobalState";

/**
 * Action Creater
 * @param type 
 * @param payload 
 */
const createAction = (type: string, payload: any) => {
    return { type: type, payload: payload }
}

/**
 * Action Types
 */
export const AppGlobalActionTypes = Object.freeze({
    IS_LOADING: "IS_LOADING",
    IS_LOGGEDIN_USER: "IS_LOGGEDIN_USER",
    IS_APP_DATA_LOADED: "IS_APP_DATA_LOADED",
    LOAD_APP_INITIAL_DATA: "LOAD_APP_INITIAL_DATA",
    API_CALL_DETAIL: "API_CALL_DETAIL",
    REQUEST_API_CALL: "REQUEST_API_CALL",
    SUCCESS_API_CALL: "SUCCESS_API_CALL",
    FAILED_API_CALL: "FAILED_API_CALL",
});


/**
 * Actions
 */
export const AppGlobalActions = {
    isLoading: (payload: boolean) => createAction(AppGlobalActionTypes.IS_LOADING, payload),
    isLoggedinUser: (payload: boolean) => createAction(AppGlobalActionTypes.IS_LOGGEDIN_USER, payload),
    isAppDataLoaded: (payload: boolean) => createAction(AppGlobalActionTypes.IS_APP_DATA_LOADED, payload),
    loadAppInitialData: () => createAction(AppGlobalActionTypes.LOAD_APP_INITIAL_DATA, null),
    requestAPICall: (actionType: string) => createAction(AppGlobalActionTypes.REQUEST_API_CALL, actionType),
    successAPICall: (payload: APICallDetail) => createAction(AppGlobalActionTypes.SUCCESS_API_CALL, payload),
    failedAPICall: (payload: APICallDetail) => createAction(AppGlobalActionTypes.FAILED_API_CALL, payload)
}