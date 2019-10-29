import { eAPIActionStatus } from "../../core/constants/DataEnumbs";

export default class APICallStore {
    public id: string = "";
    public message: string = "";
    public status: eAPIActionStatus = eAPIActionStatus.None;
    public data: any = null;
}