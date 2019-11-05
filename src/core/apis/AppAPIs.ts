import axios from "axios";
import APICaller from "../helpers/APICaller";
import UserData from "../data-objects/UserData";
import { APIActionNames } from "../constants/APIConstants";
import APIResultType from "./APIResultType";
import ServiceData from "../data-objects/ServiceData";


export default class API {

    static async registrationRequest(argUser: UserData): Promise<APIResultType<UserData>> {
        return await APICaller.Get(APIActionNames.register, `
        ?action=${APIActionNames.register}
        &first_name=${argUser.FirstName}
        &last_name=${argUser.LastName}
        &user_email=${argUser.Email}
        &user_pwd=password
        &phone=${argUser.Phone}`,
            false);
    }

    static async loginRequest(argEmail: string, argPassword: string): Promise<APIResultType<UserData>> {
        return await APICaller.Get(APIActionNames.login, `
        ?action=${APIActionNames.login}
        &user_email=${argEmail}
        &user_pwd=password`,
            false);
    }

    static async otpVerificationRequest() {
    }

    static async getAllServices(): Promise<APIResultType<Array<ServiceData>>> {

        let result = new APIResultType<Array<ServiceData>>();
        try {

            result = await APICaller.Get(APIActionNames.getAllServices, `
            ?action=${APIActionNames.getAllServices}
            `, false);
        }
        catch (err) {
            console.log("haha");
        }

        return result;
    }
}







