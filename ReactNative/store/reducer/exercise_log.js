import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    exerciseLog: []
};

const addExerciseLog = (state, action) => {
    return updateObject(state, {exerciseLog: state.exerciseLog.concat({exercise: action.exercise, weight: action.weight, repetition: action.repetition, set: action.set, chosenDate: action.chosenDate})});
};

const clearExerciseLog = (state, action) => {
    return updateObject(state, {exerciseLog: []});
};

const removeExerciseLog = (state, action) => {
    const exerciseLog = state.exerciseLog.splice(action.logId, 1);
    return updateObject(state, {exerciseLog: exerciseLog});
};

const addInitialExerciseLog = (state, action) => {
    return updateObject(state, {exerciseLog: action.exerciseLog})
}

const exerciseLogReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_EXERCISE_LOG:
            return addExerciseLog(state, action);
        case actionTypes.CLEAR_EXERCISE_LOG:
            return clearExerciseLog(state, action);
        case actionTypes.REMOVE_EXERCISE_LOG:
            return removeExerciseLog(state, action);
        case actionTypes.GET_INITIAL_EXERCISE_LOG:
            return addInitialExerciseLog(state, action)
        default:
            return state;
    }
};

export default exerciseLogReducer;