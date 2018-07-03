import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

const storeAuth = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: authData.token,
        userId: authData.userId,
        name: authData.name,
        profilePicture: authData.profilePicture,
        email: authData.email
    };
};

const storeInitialFood = (foods) => {
    return {
        type: actionTypes.GET_INITIAL_FOOD,
        foods: foods
    };
};

const storeInitialWorkout = (exercises) => {
    return {
        type: actionTypes.GET_INITIAL_EXERCISE,
        exercises: exercises
    };
};

export const authSuccess = (authData) => {
    return async dispatch => {
        dispatch(storeAuth(authData));
        axios.get(`https://www.regcise.com/api/get-fav-food/${authData.userId}`).then((data) => {
            dispatch(storeInitialFood(data.data.map(ele => JSON.stringify(ele)).filter((ele, idx, arr) => idx === arr.lastIndexOf(ele)).map(ele => JSON.parse(ele))));
            axios.get(`https://www.regcise.com/api/get-fav-workout/${authData.userId}`).then((data) => {
                dispatch(storeInitialWorkout(data.data.map(ele => JSON.stringify(ele)).filter((ele, idx, arr) => idx === arr.lastIndexOf(ele)).map(ele => JSON.parse(ele))));
            });
        });
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: err
    };
};