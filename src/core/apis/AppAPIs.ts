import axios from "axios";
import APICaller from "../helpers/APICaller";
import UserModel from "../models/UserModel";
import { APIActionNames } from "../constants/APIConstants";
import APIResultType from "./APIResultType";
import ServiceModel from "../models/ServiceModel";
import ClothTypeModel from "../models/ClothTypeModel";


export default class API {

    static async registrationRequest(argUser: UserModel): Promise<APIResultType<UserModel>> {
        return await APICaller.Get(APIActionNames.register, `
        ?action=${APIActionNames.register}
        &first_name=${argUser.FirstName}
        &last_name=${argUser.LastName}
        &user_email=${argUser.Email}
        &user_pwd=password
        &phone=${argUser.Phone}`,
            false);
    }

    static async loginRequest(argEmail: string, argPassword: string): Promise<APIResultType<UserModel>> {
        return await APICaller.Get(APIActionNames.login, `
        ?action=${APIActionNames.login}
        &user_email=${argEmail}
        &user_pwd=password`,
            false);
    }

    static async otpVerificationRequest() {
    }

    static async getAllServices(): Promise<APIResultType<Array<ServiceModel>>> {

        let result = new APIResultType<Array<ServiceModel>>();
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

    static async getAllclothTypes(): Promise<APIResultType<Array<ClothTypeModel>>> {

        let result = new APIResultType<Array<ClothTypeModel>>();
        try {

            result = await APICaller.Get(APIActionNames.getAllServicesCategory, `
            ?action=${APIActionNames.getAllServicesCategory}
            `, false);
        }
        catch (err) {
        }

        return result;
    }
}







