import APICallStore from "./APICallStore";

export class CommonStore {
    public activeAPICalls: Array<APICallStore> = [];
    public isLoading: boolean = false;
    public isLoggedInUser: boolean = false;
    public isAppDataLoaded: boolean = false;
}