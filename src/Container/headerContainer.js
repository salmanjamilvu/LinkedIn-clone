import {connect} from 'react-redux'
import H_Header from '../components/H_Header'
import { signOutAPI } from '../Services/action/index'

const mapStateToProps = (state) =>({
    User: state.userState.user
})
const mapDispatchToProps =dispatch =>({
    signOutAPI: () => dispatch(signOutAPI())
})
export default connect(mapStateToProps, mapDispatchToProps)(H_Header)