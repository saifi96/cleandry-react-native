import { createStore, combineReducers, applyMiddleware } from "redux";
import { AppReducers } from "./reducers/Index";
import createSagaMiddleware from "redux-saga";
import watcherRootSaga from "./sagas/AppSaga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherRootSaga);
export default store;