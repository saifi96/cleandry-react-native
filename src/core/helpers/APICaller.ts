import Config from "../../Config";
import Axios from "axios";
import APIResultType from "../apis/APIResultType";
import ServiceModel from "../models/ServiceModel";
import UserModel from "../models/UserModel";


export default class APICaller {

    static async Get<TData>(actionName: string, queryString: string, bAuthHeader: boolean): Promise<APIResultType<TData>> {
        let retAPIResult = new APIResultType<TData>();
        try {

            let objAuth = {};
            if (bAuthHeader) {
                let sToken: string = "";
                objAuth = { Authorization: `Bearer ${sToken}` }
            }

            let apiRes = await Axios.get(`${Config.APIBaseURI}${queryString}`, {
                headers: { objAuth }
            });


            if (apiRes.data != null && apiRes.data != undefined) {
                retAPIResult.success = apiRes.data.success;
                retAPIResult.msg = apiRes.data.msg;
                if (apiRes.data.hasOwnProperty(actionName)) {
                    retAPIResult.data = apiRes.data[actionName];
                }
            }

        } catch (error) {
            console.log("error occur");
            retAPIResult.msg = "Error! Please check your internet connection";
            retAPIResult.success = -1;
        }

        return retAPIResult;
    }

    static async Post<TData>(data: Object, bAuthHeader: boolean): Promise<APIResultType<TData>> {

        let retAPIResult = new APIResultType<TData>();
        try {

            let objAuth = {};
            if (bAuthHeader) {
                let sToken: string = "";
                objAuth = { Authorization: `Bearer ${sToken}` }
            }

            let apiRes = await Axios.post(`${Config.APIBaseURI}`, data, {
                headers: { objAuth }
            });

            Object.assign(retAPIResult, apiRes.data);

        } catch (error) {
            retAPIResult.msg = "Error! Please check your internet connection";
            retAPIResult.success = -1;
        }

        return retAPIResult;
    }
}