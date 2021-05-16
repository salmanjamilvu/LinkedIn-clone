import {connect} from 'react-redux'
import App from '../App'
import { getUserAuth, getPostAPI } from '../Services/action/index'

const mapStateToProps = (state) =>({
    User: state.userState.user
})
const mapDispatchToProps =dispatch =>({
    getUserAuth: () => dispatch(getUserAuth()),
    getPosts: () => dispatch(getPostAPI())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)