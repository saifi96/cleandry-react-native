import UserModel from "../../core/models/UserModel";
import BookingModel from "../../core/models/BookingModel";

export class UserAccountState {
    public storeUserDetail: UserModel = new UserModel();
    public storeUserBookings: Array<BookingModel> = [];
}