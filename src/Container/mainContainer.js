import {connect} from 'react-redux'
import Main from '../components/Mian'
import { signOutAPI } from '../Services/action/index'

const mapStateToProps = (state) =>({
    User: state.userState.user
})
const mapDispatchToProps =dispatch =>({
    signOutAPI: () => dispatch(signOutAPI())
})
export default connect(mapStateToProps, mapDispatchToProps)(Main)