import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { formReducer } from "./ducks";
import logger from "redux-logger";

const store = createStore(formReducer, applyMiddleware(logger));

export default store;
