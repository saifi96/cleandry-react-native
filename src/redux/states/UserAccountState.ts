import UserData from "../../core/data-objects/UserData";
import BookingData from "../../core/data-objects/BookingData";

export class UserAccountState {
    public userDetail: UserData = new UserData();
    public userBookings: Array<BookingData> = [];
}