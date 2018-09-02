import * as reducers from './reducer/index';

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default store;