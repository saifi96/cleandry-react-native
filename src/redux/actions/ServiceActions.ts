import { createAction } from "../../core/helpers/ReduxUtils";
import ServiceModel from "../../core/models/ServiceModel";
import ClothTypeModel from "../../core/models/ClothTypeModel";

/**
 * Action Types
 */
export const ServiceActionTypes = Object.freeze({
    API_GET_SERVICES_REQUEST: "API_GET_SERVICES_REQUEST",
    API_GET_CLOTH_TYPES_REQUEST: "API_GET_CLOTH_TYPES_REQUEST",
    STORE_SERVICES: "STORE_SERVICES",
    STORE_CLOTH_TYPES: "STORE_CLOTH_TYPES",
});



/**
 * Actions
 */
export const ServiceActions = {
    apiGetServicesRequest: (): any => createAction(ServiceActionTypes.API_GET_SERVICES_REQUEST, null),
    apiGetClothTypesRequest: (): any => createAction(ServiceActionTypes.API_GET_CLOTH_TYPES_REQUEST, null),
    storeServices: (payload: Array<ServiceModel>) => createAction(ServiceActionTypes.STORE_SERVICES, payload),
    storeClothTypes: (payload: Array<ClothTypeModel>) => createAction(ServiceActionTypes.STORE_CLOTH_TYPES, payload)
}




