import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as GroupReducer, GroupState } from './group/reducer';
import { reducer as UserReducer, UserState } from './user/reducer';
import thunk from 'redux-thunk';
import { GenericStoreEnhancer } from 'redux';
import { authReducer as AuthReducer, AuthState } from './auth/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (enhancer: GenericStoreEnhancer) => GenericStoreEnhancer;
  }
}

export interface RootState {
  group: GroupState;
  user: UserState;
  auth: AuthState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    group: GroupReducer,
    user: UserReducer,
    auth: AuthReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);