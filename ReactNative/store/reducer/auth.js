import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    error: null,
    userId: null,
    name: null,
    profilePicture: null,
    email: null
};

const authStart = (state, action) => {
    return updateObject(state, {error: null});
};

const authSuccess = (state, action) => {
    return updateObject(state, {error: null, token: action.token, userId: action.userId, name: action.name, profilePicture: action.profilePicture, email: action.email});
};

const authFail = (state, action) => {
    return updateObject(state, {error: action.error, loading: false});
};

const authLogout = (state, action) => {
    return updateObject(state, {token: null, userId: null, name: null, profilePicture: null});
};

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }
};

export default authReducer;