import {combineReducers} from 'redux'

import usersReducer from './reducers/usersReducer'
import showsReducer from "./reducers/showsReducer";

export default combineReducers({
  users: usersReducer,
  shows: showsReducer
})
