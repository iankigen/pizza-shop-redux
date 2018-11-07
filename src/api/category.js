import { api } from './index'


const addCategory = (data) => {
    return api.post('/categories/', data)
};

const updateCategory = (data) => {
    return api.put('/', data)
};

const getCategory = (id) => {
    return api.get(id ? `/categories/${id}` : '/categories/')
};

const deleteCategory = (id) => {
    return api.del(`/categories/${id}`)
};

export const categoryService = {addCategory, deleteCategory, getCategory, updateCategory};