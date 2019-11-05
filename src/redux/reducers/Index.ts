import { combineReducers } from "redux"
import AppGlobalReducer from "./AppGlobalReducer"
import UserAccountReducer from "./UserAccountReducer"
import ServiceReducer from "./ServiceReducer";

export const AppReducers = combineReducers({
    AppGlobalState: AppGlobalReducer,
    UserAccountState: UserAccountReducer,
    ServiceState: ServiceReducer
});

export type AppState = ReturnType<typeof AppReducers>