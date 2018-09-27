import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dogReducer from './dogReducer';
import dogParkReducer from './dogParkReducer';
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({
  userState: userReducer,
  dogState: dogReducer,
  dogParkState: dogParkReducer,
})

export default rootReducer;
