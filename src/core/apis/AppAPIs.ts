import axios from "axios";
import APICaller from "../helpers/APICaller";
import UserData from "../data-objects/UserData";
import { APIActionNames } from "../constants/APIConstants";
import APIResultType from "./APIResultType";


export default class API {

    static async registrationRequest(argUser: UserData): Promise<APIResultType> {
        return await APICaller.Get(`
        ?action=${APIActionNames.register}
        &first_name=${argUser.FirstName}
        &last_name=${argUser.LastName}
        &user_email=${argUser.Email}
        &user_pwd=password
        &phone=${argUser.Phone}`,
            false);
    }

    static async loginRequest(argEmail: string, argPassword: string): Promise<APIResultType> {
        return await APICaller.Get(`
        ?action=${APIActionNames.login}
        &user_email=${argEmail}
        &user_pwd=password`,
            false);
    }

    static async otpVerificationRequest() {
    }

    static async getAllServices(): Promise<APIResultType> {
        return await APICaller.Get(`
        ?action=${APIActionNames.getAllServices}
        `, false);
    }
}







