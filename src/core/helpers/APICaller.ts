import Config from "../../Config";
import Axios from "axios";
import APIResultType from "../apis/APIResultType";


export default class APICaller {

    static async Get(queryString: string, bAuthHeader: boolean): Promise<APIResultType> {
        let retAPIResult = new APIResultType();

        try {

            let objAuth = {};
            if (bAuthHeader) {
                let sToken: string = "";
                objAuth = { Authorization: `Bearer ${sToken}` }
            }

            let apiRes = await Axios.get(`${Config.APIBaseURI}${queryString}`, {
                headers: { objAuth }
            });

            Object.assign(retAPIResult, apiRes.data);

        } catch (error) {
            retAPIResult.msg = "Error! Please check your internet connection";
            retAPIResult.success = -1;
        }

        return retAPIResult;
    }

    static async Post(data: Object, bAuthHeader: boolean): Promise<APIResultType> {

        let retAPIResult = new APIResultType();
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