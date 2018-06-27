import * as actionTypes from './actionTypes';
import axios from 'axios';
import config from '../../Config/config';

export const check_food = (food) => {
    return dispatch => {
        dispatch(check_food_start());
        axios({
            url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
            method: 'post',
            headers: {
                'x-app-key': config.key,
                'x-app-id': config.id,
                'Content-Type': 'application/json'
            },
            data: {
                "query": food
            },
            responseType: 'json'
        }).then((body) => {
            const data = {calories: body.data.foods[0].nf_calories, fat: body.data.foods[0].nf_total_fat, carb: body.data.foods[0].nf_total_carbohydrate, protein: body.data.foods[0].nf_protein, image: body.data.foods[0].photo.highres, food: food};
            dispatch(check_food_success(data));
        }).catch(err => {
            dispatch(check_food_fail(err));
        });
    };
};

export const check_food_success = (data) => {
    return {
        type: actionTypes.CHECK_FOOD_SUCCESS,
        data: data
    };
};

export const check_food_start = () => {
    return {
        type: actionTypes.CHECK_FOOD_START
    };
};

export const check_food_fail = (error) => {
    return {
        type: actionTypes.CHECK_FOOD_FAIL,
        error: error
    };
};