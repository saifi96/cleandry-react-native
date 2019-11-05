import { createAction } from "../../core/helpers/ReduxUtils";
import UserData from "../../core/data-objects/UserData";
import BookingData from "../../core/data-objects/BookingData";

/**
 * Action Types
 */
export const UserAccountActionTypes = Object.freeze({
    API_LOGIN_REQUEST: "API_LOGIN_REQUEST",
    API_OTP_VERIFICATION_REQUEST: "API_OTP_VERIFICATION_REQUEST",
    API_REGISTER_USER_REQUEST: "API_REGISTER_USER_REQUEST",
    STORE_USER_DETAIL: "STORE_USER_DETAIL",
    STORE_USER_BOOKINGS: "STORE_USER_BOOKINGS"
});



/**
 * Actions
 */
export const UserAccountActions = {
    apiLoginRequest: (payload: UserData) => createAction(UserAccountActionTypes.API_LOGIN_REQUEST, payload),
    apiOTPVerificationRequest: (payload: number) => createAction(UserAccountActionTypes.API_OTP_VERIFICATION_REQUEST, payload),
    apiRegisterUserRequest: (payload: UserData) => createAction(UserAccountActionTypes.API_REGISTER_USER_REQUEST, payload),
    storeUserDetail: (payload: UserData) => createAction(UserAccountActionTypes.STORE_USER_DETAIL, payload),
    storeUserBookings: (payload: Array<BookingData>) => createAction(UserAccountActionTypes.STORE_USER_BOOKINGS, payload),
}



