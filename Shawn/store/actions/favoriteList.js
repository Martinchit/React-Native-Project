import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../Config/config';

const sendFoodRedux = (food) => {
    return {
        type: actionTypes.ADD_FAVORITE_FOOD,
        food: food
    };
};

export const addFavoriteFood = (foodInfo, userId) => {
    let name = foodInfo.food.match(/[a-zA-z]/gi).join('')[0].toUpperCase() + foodInfo.food.match(/[a-zA-z]/gi).join('').slice(1)
    let obj = {quantity: Number(foodInfo.food.match(/\d/gi)), name: name, user_id: userId, carb: foodInfo.carb, fats: foodInfo.fat, protein: foodInfo.protein, calories: foodInfo.calories};
    return dispatch => {
        dispatch(sendFoodRedux(obj));
        axios({
            method: 'POST',
            url: 'https://www.regcise.com/api/fav-food',
            data: obj
        }).then((data)=>{
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    };
};

const sendExerciseRedux = (exercise) => {
    return {
        type: actionTypes.ADD_FAVORITE_EXERCISE,
        exercise: exercise
    };
};

export const addFavoriteExercise = (exercise, userId) => {
    let obj = {name: exercise.exercise, weight: exercise.weight, rep: exercise.repetition, set: exercise.set, user_id: userId};
    return dispatch => {
        dispatch(sendExerciseRedux(obj));
        axios({
            method: 'POST',
            url: 'https://www.regcise.com/api/fav-workout',
            data: obj
        }).then((data)=>{
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
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