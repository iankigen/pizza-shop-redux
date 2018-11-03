import { combineReducers } from 'redux'
import { articles } from './article'

const test = (state={ian: 'Ian'}, action) => state;

export default combineReducers({
    articles,
    test,
})