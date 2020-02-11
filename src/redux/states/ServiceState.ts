import ServiceModel from "../../core/models/ServiceModel";
import ServiceUnitModel from "../../core/models/ServiceUnitModel";


export class ServiceState {
    services: Array<ServiceModel> = [];
    clothTypes: Array<ServiceUnitModel> = [];
}