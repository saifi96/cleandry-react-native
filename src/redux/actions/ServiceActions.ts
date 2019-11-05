import { createAction } from "../../core/helpers/ReduxUtils";
import ServiceData from "../../core/data-objects/ServiceData";

/**
 * Action Types
 */
export const ServiceActionTypes = Object.freeze({
    API_GET_SERVICES_REQUEST: "API_GET_SERVICES_REQUEST",
    STORE_SERVICES: "STORE_SERVICES"
});



/**
 * Actions
 */
export const ServiceActions = {
    apiGetServicesRequest: (): any => createAction(ServiceActionTypes.API_GET_SERVICES_REQUEST, null),
    storeServices: (payload: Array<ServiceData>) => createAction(ServiceActionTypes.STORE_SERVICES, payload),
}




