import { createStore, applyMiddleware } from 'redux';
//no reducers yet. 
import mainReducer from './Reducers/reducer';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const middleware = applyMiddleware(ReduxPromise, thunk, logger());
const store = createStore(mainReducer , middleware);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
