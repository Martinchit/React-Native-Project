import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../Config/config';

export const addFavoriteFood = (food) => {
    return {
        type: actionTypes.ADD_FAVORITE_FOOD,
        food: food
    };
};

export const addFavoriteExercise = (exercise) => {
    return {
        type: actionTypes.ADD_FAVORITE_EXERCISE,
        exercise: exercise
    };
};

export const removeFavoritedFood = (foodId) => {
    return {
        type: actionTypes.REMOVE_FAVORITE_FOOD,
        id: foodId
    };
};

export const removeFavoritedExercise = (exerciseId) => {
    return {
        type: actionTypes.REMOVE_FAVORITE_EXERCISE,
        id: exerciseId
    };
};

export const clearFavoritedFoodList = () => {
    return {
        type: actionTypes.CLEAR_FAVORITE_FOOD_LIST
    };
};

export const clearFavoritedExerciseList = () => {
    return {
        type: actionTypes.CLEAR_FAVORITE_EXERCISE_LIST
    };
};