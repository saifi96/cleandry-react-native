import { createStore, combineReducers, applyMiddleware } from "redux";
import { AppReducers } from "./reducers/Index";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;