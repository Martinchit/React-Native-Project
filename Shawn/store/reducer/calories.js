import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    foods: [],
    error: null
};

const checkFoodStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const checkFoodSuccess = (state, action) => {
    return updateObject(state, {loading: false, foods: state.foods.concat(action.data)});
};

const checkFoodFail = (state, action) => {
    return updateObject(state, {error: action.error, loading: false});
};

const checkFoodReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.CHECK_FOOD_START:
            return checkFoodStart(state, action);
        case actionTypes.CHECK_FOOD_SUCCESS:
            return checkFoodSuccess(state, action);
        case actionTypes.CHECK_FOOD_FAIL:
            return checkFoodFail(state, action);
        default:
            return state;
    }
};

export default checkFoodReducer;