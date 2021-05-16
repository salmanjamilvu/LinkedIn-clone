import {connect} from 'react-redux'
import Login from '../components/Login'
import { signInAPI } from '../Services/action/index'

const mapStateToProps = (state) =>({
    User: state.userState.user
})
const mapDispatchToProps =dispatch =>({
    signinHandle: () => dispatch(signInAPI())
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)