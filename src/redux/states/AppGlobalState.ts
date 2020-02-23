import { eAPIActionStatus } from "../../core/enums/DataEnums";
import BannerModel from "../../core/models/BannerModel";

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
    public appBanners: BannerModel[] = [];
}