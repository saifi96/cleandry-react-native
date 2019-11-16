import { Action } from "../../core/helpers/ReduxUtils";
import { UserAccountActionTypes } from "../actions/UserAccountActions";
import { UserAccountState } from "../states/UserAccountState";
import UserModel from "../../core/models/UserModel";
import BookingModel from "../../core/models/BookingModel";

const initialState: UserAccountState = {
    storeUserDetail: new UserModel(),
    storeUserBookings: new Array<BookingModel>()
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