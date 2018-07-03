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

const removeFavoritedFoodFromRedux = foodId => {
    return {
        type: actionTypes.REMOVE_FAVORITE_FOOD,
        id: foodId
    };
}

export const removeFavoritedFood = (foodInfo, foodId, userId) => {
    return dispatch => {
        dispatch(removeFavoritedFoodFromRedux(foodId));
        axios.post(`https://www.regcise.com/api/del-fav-food/${userId}`, foodInfo);
    };
};

const removeFavoritedExerciseFromRedux = (exerciseId) => {
    return {
        type: actionTypes.REMOVE_FAVORITE_EXERCISE,
        id: exerciseId
    };
};

export const removeFavoritedExercise = (exerciseInfo, exerciseId, userId) => {
    return dispatch => {
        dispatch(removeFavoritedExerciseFromRedux(exerciseId));
        let obj = exerciseInfo;
        obj.weight = Number(exerciseInfo.weight.match(/\d+(\.5)?/gi)[0]);
        axios.post(`https://www.regcise.com/api/del-fav-workout/${userId}`, obj);
    };
};

const clearReduxFavoritedFoodList = () => {
    return {
        type: actionTypes.CLEAR_FAVORITE_FOOD_LIST
    };
};

export const clearFavoritedFoodList = (userId) => {
    return dispatch => {
        dispatch(clearReduxFavoritedFoodList());
        axios.post('https://www.regcise.com/api/clear-food', {user_id: userId});
    };
};

const clearReduxFavoritedExerciseList = () => {
    return {
        type: actionTypes.CLEAR_FAVORITE_EXERCISE_LIST
    };
};

export const clearFavoritedExerciseList = (userId) => {
    return dispatch => {
        dispatch(clearReduxFavoritedExerciseList());
        axios.post('https://www.regcise.com/api/clear-workout', {user_id: userId});
    };
};