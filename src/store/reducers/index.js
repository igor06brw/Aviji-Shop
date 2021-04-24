import { combineReducers } from "redux";
import authReducer from "./authReducer";
import outfitReducer from "./outfitReducer";
import { firebaseReducer } from "react-redux-firebase";


export default combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  outfit: outfitReducer,
});