import outfitReducer from './outfit';
import shoppingReducer from './shopping';
import currentUser from "./firebase"
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    outfit: outfitReducer,
    shopping: shoppingReducer,
    currentUser
})

export default allReducers;