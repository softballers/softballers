//main reducer
import { combineReducers } from 'redux';
//more reducers below
import loginReducer from './loginReducer';

const mainReducer = combineReducers({
  login: loginReducer
});

export default mainReducer;