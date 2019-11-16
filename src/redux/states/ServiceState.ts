import ServiceModel from "../../core/models/ServiceModel";
import ClothTypeModel from "../../core/models/ClothTypeModel";


export class ServiceState {
    services: Array<ServiceModel> = [];
    clothTypes: Array<ClothTypeModel> = [];
}