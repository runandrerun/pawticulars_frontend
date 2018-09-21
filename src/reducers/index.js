import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dogReducer from './dogReducer';
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({
  userState: userReducer,
  dogState: dogReducer
})

export default rootReducer;
