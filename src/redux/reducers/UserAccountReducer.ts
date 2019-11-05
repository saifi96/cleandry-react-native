import { Action } from "../../core/helpers/ReduxUtils";
import { UserAccountActionTypes } from "../actions/UserAccountActions";
import { UserAccountState } from "../states/UserAccountState";
import UserData from "../../core/data-objects/UserData";
import BookingData from "../../core/data-objects/BookingData";

const initialState: UserAccountState = {
    storeUserDetail: new UserData(),
    storeUserBookings: new Array<BookingData>()
}
const UserAccountReducer = (state = new UserAccountState(), action: Action): UserAccountState => {

    if (action.payload == null || action.payload == undefined) {
        return state;
    }

    let newState = { ...state };

    switch (action.type) {
        case UserAccountActionTypes.STORE_USER_DETAIL:
            newState.storeUserDetail = action.payload;
            break;
        case UserAccountActionTypes.STORE_USER_BOOKINGS:
            newState.storeUserBookings = action.payload;
            break;
        default:
            break;
    }

    return newState;
};

export default UserAccountReducer;