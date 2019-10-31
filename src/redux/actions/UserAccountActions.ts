import { createAction } from "../../core/helpers/ReduxUtils";
import UserData from "../../core/data-objects/UserData";
import BookingData from "../../core/data-objects/BookingData";

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
    USER_DETAILS: "USER_DETAILS",
    USER_BOOKINGS: "USER_BOOKINGS"
});



/**
 * Actions
 */
export const UserAccountActions = {
    userDetail: (payload: UserData) => createAction(UserAccountActionTypes.USER_DETAILS, payload),
    userBookings: (payload: Array<BookingData>) => createAction(UserAccountActionTypes.USER_BOOKINGS, payload),
}



