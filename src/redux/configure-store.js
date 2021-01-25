import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => {
    return createStore(
        allReducers, 
        initialState, 
        composeEnhancer(applyMiddleware(thunk)));
}

export default configureStore;