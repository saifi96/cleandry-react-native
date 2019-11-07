import { Action } from "../../core/helpers/ReduxUtils";
import { ServiceActionTypes } from "../actions/ServiceActions";
import { ServiceState } from "../states/ServiceState";


const ServiceReducer = (state = new ServiceState(), action: Action): ServiceState => {

    if (action.payload == null || action.payload == undefined) {
        return state;
    }

    let newState = { ...state };

    switch (action.type) {
        case ServiceActionTypes.STORE_SERVICES:
            newState.services = action.payload;
            break;
        case ServiceActionTypes.STORE_CLOTH_TYPES:
            newState.clothTypes = action.payload;
        default:
            break;
    }

    return newState;
};

export default ServiceReducer;