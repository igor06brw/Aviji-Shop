import outfitReducer from './outfit';
import shoppingReducer from './shopping';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    outfit: outfitReducer,
    shopping: shoppingReducer
})

export default allReducers;