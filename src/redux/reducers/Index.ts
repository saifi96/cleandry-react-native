import { combineReducers } from "redux"
import AppGlobalReducer from "./AppGlobalReducer"
import UserAccountReducer from "./UserAccountReducer"

export const AppReducers = combineReducers({
    AppGlobalState: AppGlobalReducer,
    UserAccountState: UserAccountReducer
});

export type AppState = ReturnType<typeof AppReducers>