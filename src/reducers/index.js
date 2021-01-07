import outfitReducer from './outfit';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    outfit: outfitReducer
})

export default allReducer;