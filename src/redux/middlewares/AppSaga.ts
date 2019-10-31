import { takeLatest, call } from "redux-saga/effects";
import { Middleware, Dispatch, MiddlewareAPI } from "redux";
import { AppState } from "react-native";
import { Action } from "../../core/helpers/ReduxUtils";

const AppSaga: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    const params = { store, next, action };

    switch (action.type) {

    }
}



export default AppSaga;