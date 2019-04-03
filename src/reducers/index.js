import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './postsReducer'

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
})
