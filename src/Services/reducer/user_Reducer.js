import { SET_USER, SET_POST } from '../action/actionType'

const INITAIL_STATE = {
    user: null,
    posts: []
}

const user_Reducer = ( state = INITAIL_STATE, action ) =>{
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                user: action.user
            }
        case SET_POST:
            return{
                ...state,
                posts: action.post
            }
        default:
            return state
    }
}
export default user_Reducer