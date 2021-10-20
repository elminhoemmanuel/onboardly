import { combineReducers } from 'redux'
import { newsReducer } from './news';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:['news']
}

const rootReducer = combineReducers({
    news: newsReducer,
});

export default persistReducer(persistConfig, rootReducer);