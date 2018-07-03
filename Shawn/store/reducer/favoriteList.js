import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    favoritedFoods: [],
    favoritedExercises: []
}

const getInitialFavoriteFood = (state, action) => {
    return updateObject(state, {favoritedFoods: action.foods});
};

const getInitialFavoriteExercise = (state, action) => {
    return updateObject(state, {favoritedExercises: action.exercises});
};

const addFavoriteFood = (state, action) => {
    return updateObject(state, {favoritedFoods: state.favoritedFoods.concat(action.food)});
};

const addFavoriteExercise = (state, action) => {
    return updateObject(state, {favoritedExercises: state.favoritedExercises.concat(action.exercise)});
};

const removeFavoriteFood = (state, action) => {
    let favoritedFoods = state.favoritedFoods;
    favoritedFoods.splice(action.id, 1);
    return updateObject(state, {favoritedFoods: favoritedFoods});
};

const removeFavoriteExercise = (state, action) => {
    let favoritedExercises = state.favoritedExercises;
    favoritedExercises.splice(action.id, 1);
    return updateObject(state, {favoritedExercises: favoritedExercises});
};

const clearFavoriteFood = (state, action) => {
    return updateObject(state, {favoritedFoods: []});
};

const clearFavoriteExercise = (state, action) => {
    return updateObject(state, {favoritedExercises: []});
};

const favoriteListReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_INITIAL_FOOD:
            return getInitialFavoriteFood(state, action);
        case actionTypes.GET_INITIAL_EXERCISE:
            return getInitialFavoriteExercise(state, action);
        case actionTypes.ADD_FAVORITE_FOOD:
            return addFavoriteFood(state, action);
        case actionTypes.ADD_FAVORITE_EXERCISE:
            return addFavoriteExercise(state, action);
        case actionTypes.REMOVE_FAVORITE_EXERCISE:
            return removeFavoriteExercise(state, action);
        case actionTypes.REMOVE_FAVORITE_FOOD:
            return removeFavoriteFood(state, action);
        case actionTypes.CLEAR_FAVORITE_FOOD_LIST:
            return clearFavoriteFood(state, action);
        case actionTypes.CLEAR_FAVORITE_EXERCISE_LIST:
            return clearFavoriteExercise(state, action);
        default:
            return state;
    }
};

export default favoriteListReducer;