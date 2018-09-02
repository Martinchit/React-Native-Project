import * as actionTypes from './actionTypes';
import axios from 'axios';

export const clearLog = () => {
    return {
        type: actionTypes.CLEAR_EXERCISE_LOG
    };
};

export const removeLog = (id) => {
    return {
        type: actionTypes.REMOVE_EXERCISE_LOG,
        logId: id
    };
};

export const addLogToRedux = (exercise, weight, repetition, set, chosenDate) => {
    return {
        type: actionTypes.ADD_EXERCISE_LOG,
        exercise: exercise,
        weight: weight,
        repetition: repetition,
        set: set,
        chosenDate: chosenDate
    };
}

export const addLog = (userId, exercise, weight, repetition, set, chosenDate) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: 'https://regcise.firebaseio.com/exerciseLog.json',
            data: {userId, exercise, weight, repetition, set, chosenDate}
        }).then((data) => {
            dispatch(addLogToRedux(exercise, weight, repetition, set, chosenDate))
        }).catch((err) => {
            throw new Error(err)
        })
    }
};