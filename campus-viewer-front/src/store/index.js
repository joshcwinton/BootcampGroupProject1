import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// Individual reducers under one alias
import {allCampuses,singleCampus} from '../reducers/index';

// Construct our Redux store;
const rootReducer = combineReducers({allCampuses,singleCampus});
const logger = createLogger({ collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;
