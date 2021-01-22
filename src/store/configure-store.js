import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers/";
import thunk from "redux-thunk";

const configureStore = (initialState) => {
    return createStore(allReducers, initialState, applyMiddleware(thunk));
}

export default configureStore;