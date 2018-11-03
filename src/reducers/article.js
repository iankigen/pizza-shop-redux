import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
    articles: [{title: 'Hello world with redux !!', id: 1}]
};

export const articles = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state, articles: [...state.articles, action.payload]
            };
        default:
            return state;
    }
};
