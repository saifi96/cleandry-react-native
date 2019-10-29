/**
 * Action Types
 */
export const UserAccountActionTypes = Object.freeze({
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILED: "LOGIN_FAILED",
    OTP_VERIFICATION_REQUEST: "OTP_VERIFICATION_REQUEST",
    OTP_VERIFICATION_SUCCESS: "OTP_VERIFICATION_SUCCESS",
    OTP_VERIFICATION_FAILED: "OTP_VERIFICATION_FAILED",
    REGISTER_REQUEST: "REGISTER_REQUEST",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAILED: "REGISTER_FAILED",
});



/**
 * Actions
 */
export const UserAccountActions = {
    loginRequest: () => createAction(UserAccountActionTypes.LOGIN_REQUEST, true),
    loginSuccess: () => createAction(UserAccountActionTypes.LOGIN_SUCCESS, true),
    loginFailed: () => createAction(UserAccountActionTypes.LOGIN_FAILED, true),
    registerRequest: () => createAction(UserAccountActionTypes.REGISTER_REQUEST, true),
    registerSuccess: () => createAction(UserAccountActionTypes.REGISTER_SUCCESS, null),
    registerFailed: () => createAction(UserAccountActionTypes.REGISTER_FAILED, null),
    otpVerificationRequest: () => createAction(UserAccountActionTypes.OTP_VERIFICATION_REQUEST, null),
    otpVerificationSuccess: () => createAction(UserAccountActionTypes.OTP_VERIFICATION_SUCCESS, null),
    otpVerificationFailed: () => createAction(UserAccountActionTypes.OTP_VERIFICATION_FAILED, null),
}



