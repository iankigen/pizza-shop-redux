import {pizzaConstants} from "../constants/pizza";

const initialState = {
    pizza: [],
    loading: false,
};

export const pizza = (state=initialState, action) => {
    switch (action.type) {
        case pizzaConstants.GET_SINGLE_PIZZA:
            return {...state, ...action.payload};
        case pizzaConstants.GET_ALL_PIZZAS:
            return {...state, ...action.payload};
        case pizzaConstants.ADD_PIZZA:
            return {...state, ...action.payload};
        case pizzaConstants.UPDATE_PIZZA:
            return {...state, ...action.payload};
        case pizzaConstants.DELETE_PIZZA:
            return {...state, ...action.payload};
        case pizzaConstants.PIZZA_REQUEST:
            return {...state, ...action.payload};
        default:
            return state
    }
};
