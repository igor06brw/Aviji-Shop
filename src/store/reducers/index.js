import {combineReducers} from "redux";

import authReducer from "./authReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    product : productReducer,
    auth : authReducer,
});

export default rootReducer;