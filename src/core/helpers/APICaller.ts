import Config from "../../Config";
import Axios from "axios";
import APIResultType from "../apis/APIResultType";
import ServiceModel from "../models/ServiceModel";
import UserModel from "../models/UserModel";

export default class APICaller {

    private static getHeader(argAuthRequired = false) {
        const objHeaderConfig: any = {};
        if (argAuthRequired) {
            const sToken: string = "";
            objHeaderConfig.Authorization = `Bearer ${sToken}`
        }
        return { headers: { ...objHeaderConfig } }
    }

    static async Get<TData>(queryString: string, bAuthHeader: boolean = false): Promise<APIResultType<TData>> {
        const retAPIResult = new APIResultType<TData>();
        try {
            const apiRes = await Axios.get(`${Config.APIBaseURI}${queryString}`, this.getHeader(bAuthHeader))
            if (apiRes.data) {
                retAPIResult.data = apiRes.data[apiRes.data.action]
                retAPIResult.success = apiRes.data.success
                retAPIResult.msg = apiRes.data.msg
            }
        } catch (error) {
            retAPIResult.msg = "Error! Please check your internet connection";
            retAPIResult.success = 0;
        }

        return retAPIResult;
    }

    static async Post<TData>(data: Object, bAuthHeader: boolean = false): Promise<APIResultType<TData>> {

        let retAPIResult = new APIResultType<TData>();
        try {
            const apiRes = await Axios.post(`${Config.APIBaseURI}`, data, this.getHeader(bAuthHeader));
            Object.assign(retAPIResult, apiRes.data);

        } catch (error) {
            retAPIResult.msg = "Error! Please check your internet connection";
            retAPIResult.success = -1;
        }

        return retAPIResult;
    }
}