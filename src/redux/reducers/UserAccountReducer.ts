import { Action } from "../../core/helpers/ReduxUtils";
import { UserAccountActionTypes } from "../actions/UserAccountActions";
import { UserAccountState } from "../states/UserAccountState";
import UserData from "../../core/data-objects/UserData";
import BookingData from "../../core/data-objects/BookingData";

const initialState: UserAccountState = {
    userDetail: new UserData(),
    userBookings: new Array<BookingData>()
}
const UserAccountReducer = (state = new UserAccountState(), action: Action): UserAccountState => {

    if (action.payload == null || action.payload == undefined) {
        return state;
    }

    let newState = { ...state };

    switch (action.type) {
        case UserAccountActionTypes.USER_DETAILS:
            newState.userDetail = action.payload;
            break;
        case UserAccountActionTypes.USER_BOOKINGS:
            newState.userBookings = action.payload;
            break;
        default:
            break;
    }

    return newState;
};

export default UserAccountReducer;