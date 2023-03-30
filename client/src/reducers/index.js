import { combineReducers } from "redux"
import authReducer from "./auth"
import currentUserReducer from './currentUser'
import questionsReducer from './questions.js'
import usersReducer from "./users"

export default combineReducers ({
    authReducer , currentUserReducer, questionsReducer, usersReducer
}) 