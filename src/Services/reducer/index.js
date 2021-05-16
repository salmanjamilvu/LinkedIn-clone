import {combineReducers} from 'redux'
import user_Reducer from './user_Reducer'

export default combineReducers({
    userState: user_Reducer,
})