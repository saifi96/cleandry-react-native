import { createAction } from "../../core/helpers/ReduxUtils";
import UserModel from "../../core/models/UserModel";
import BookingModel from "../../core/models/BookingModel";

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
    apiLoginRequest: (payload: UserModel) => createAction(UserAccountActionTypes.API_LOGIN_REQUEST, payload),
    apiOTPVerificationRequest: (payload: number) => createAction(UserAccountActionTypes.API_OTP_VERIFICATION_REQUEST, payload),
    apiRegisterUserRequest: (payload: UserModel) => createAction(UserAccountActionTypes.API_REGISTER_USER_REQUEST, payload),
    storeUserDetail: (payload: UserModel) => createAction(UserAccountActionTypes.STORE_USER_DETAIL, payload),
    storeUserBookings: (payload: Array<BookingModel>) => createAction(UserAccountActionTypes.STORE_USER_BOOKINGS, payload),
}



