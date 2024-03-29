import axios from "axios";
import APICaller from "../helpers/APICaller";
import UserModel from "../models/UserModel";
import { APIActionNames } from "../constants/APIConstants";
import APIResultType from "./APIResultType";
import ServiceModel from "../models/ServiceModel";
import ServiceUnitModel from "../models/ServiceUnitModel";
import BannerModel from "../models/BannerModel";


export default class API {

    static async getAppBanners(): Promise<APIResultType<BannerModel[]>> {
        return await APICaller.Get<BannerModel[]>(`?action=${APIActionNames.allBanner}`);
    }

    static async registrationRequest(argUser: UserModel): Promise<APIResultType<UserModel>> {
        return await APICaller.Get<UserModel>(`
        ?action=${APIActionNames.register}
        &first_name=${argUser.FirstName}
        &last_name=${argUser.LastName}
        &user_email=${argUser.Email}
        &user_pwd=password
        &phone=${argUser.Phone}`,
            false);
    }

    static async loginRequest(argEmail: string, argPassword: string): Promise<APIResultType<UserModel>> {
        return await APICaller.Get(`
        ?action=${APIActionNames.login}
        &user_email=${argEmail}
        &user_pwd=password`,
            false);
    }

    static async otpVerificationRequest() {
    }

    static async getAllServices(): Promise<APIResultType<ServiceModel[]>> {
        return await APICaller.Get(`?action=${APIActionNames.getAllServices}`);
    }

    static async getAllclothTypes(): Promise<APIResultType<ServiceUnitModel[]>> {
        return await APICaller.Get(`?action=${APIActionNames.getAllServicesCategory}`);
    }
}







