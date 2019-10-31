import { eAPIActionStatus } from "../../core/constants/DataEnumbs";

export class APICallDetail {
    public callerId: string = "";
    public message: string = "";
    public status: eAPIActionStatus = eAPIActionStatus.None;
    public data: any = null;
}

export default interface AppGlobalState {
    activeAPICalls: Array<APICallDetail>;
    isLoading: boolean;
    isLoggedInUser: boolean;
    isAppDataLoaded: boolean;
}