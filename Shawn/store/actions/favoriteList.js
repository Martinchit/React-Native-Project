import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../Config/config';

const sendRedux = (food) => {
    return {
        type: actionTypes.ADD_FAVORITE_FOOD,
        food: food
    };
};

export const addFavoriteFood = (food, userId) => {
    console.log(userId)
    console.log(food)
    let name = food.food.match(/[a-zA-z]/gi).join('')[0].toUpperCase() + food.food.match(/[a-zA-z]/gi).join('').slice(1)
    let obj = {quantity: Number(food.food.match(/\d/gi)), name: name, user_id: userId, carb: food.carb, fats: food.fat, protein: food.protein, calories: food.calories};
    return dispatch => {
        dispatch(sendRedux(food));
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