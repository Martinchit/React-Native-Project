import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { authReducer as AuthReducer, AuthState } from './auth/reducer';


// tslint:disable-next-line:interface-name
export interface RootState {
  auth: AuthState;
}


// const middleware = applyMiddleware(thunk,logger);


export const store = createStore(
  combineReducers({
    auth: AuthReducer
  }),
  applyMiddleware(thunk,logger)
);