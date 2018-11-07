import { pizzaConstants } from './../constants/pizza'
import { pizzaService } from "../api/pizza";
import { ADMIN_DASHBOARD } from "../constants/url-list";

const startRequest = (dispatch) => dispatch({type: pizzaConstants.PIZZA_REQUEST, payload: {loading: true}});
const finishRequest = (dispatch) => dispatch({type: pizzaConstants.PIZZA_REQUEST, payload: {loading: false}});

const postPizza = (data, history) => {
    let formData = new FormData();
    formData.append('image', data.image.file, data.image.name);
    formData.set('name', data.name);
    formData.set('category', data.category);
    formData.set('price', data.price);
    formData.set('ingredients', data.ingredients);

    return async dispatch => {
        startRequest(dispatch);
        await pizzaService.addPizza(formData, data.category).then(pizza => {
            dispatch({type: pizzaConstants.ADD_PIZZA, payload: {categories: pizza.data}});
            finishRequest(dispatch);
            history.push(ADMIN_DASHBOARD)
        }, error => {
            finishRequest(dispatch);
            console.log('error', error)
        })
    }
};

const getPizza = (id, history) => {
    return async dispatch => {
        startRequest(dispatch);
        await pizzaService.getPizza(id).then(categories => {
            dispatch({
                type: id ? pizzaConstants.GET_SINGLE_PIZZA : pizzaConstants.GET_ALL_PIZZAS,
                payload: {categories: categories.data}
            });
            finishRequest(dispatch);
            history.push(ADMIN_DASHBOARD)
        }, error => {
            finishRequest(dispatch);
            console.log('error', error)
        })
    }
};

export const pizzaActions = {
    postPizza, getPizza
};