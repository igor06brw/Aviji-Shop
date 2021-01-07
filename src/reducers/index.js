import outfitReducer from './outfit';
import shoppingReducer from './shopping';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    outfit: outfitReducer,
    shopping: shoppingReducer
})

export default allReducer;