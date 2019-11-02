import { eAPIActionStatus } from "../../core/enums/DataEnums";

export class APICallDetail {
    public callerId: string = "";
    public message: string = "";
    public status: eAPIActionStatus = eAPIActionStatus.None;
    public data: any = null;
}

export default class AppGlobalState {
    public activeAPICalls: Array<APICallDetail> = [];
    public isLoading: boolean = false;
    public isLoggedInUser: boolean = false;
    public isAppDataLoaded: boolean = false;
}