import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dogReducer from './dogReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  dogState: dogReducer
})

export default rootReducer;
