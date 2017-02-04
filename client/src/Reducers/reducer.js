//main reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//more reducers below
import loginReducer from './loginReducer';

const mainReducer = combineReducers({
  login: loginReducer,
  routing: routerReducer
});

export default mainReducer;
