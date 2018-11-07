import { api } from './index'

const addPizza = (data, id) => {
    return api.post_with_file(`/categories/${id}/pizzas`, data)
};

const updatePizza = (data) => {
    return api.put('/', data)
};

const getPizza  = (id) => {
    return api.get(id ? `/categories/${id}` : '/categories/')
};

const deletePizza  = (id) => {
    return api.del(`/categories/${id}`)
};


export const pizzaService = {addPizza, updatePizza, getPizza, deletePizza};