import AuthReducer from './Auth/reducer'
import {combineReducers} from 'redux'
import { bookReducer } from './Book/reducer'

export default combineReducers({
	Auth:AuthReducer,
	Book: bookReducer
})