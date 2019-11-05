import UserData from "../../core/data-objects/UserData";
import BookingData from "../../core/data-objects/BookingData";

export class UserAccountState {
    public storeUserDetail: UserData = new UserData();
    public storeUserBookings: Array<BookingData> = [];
}