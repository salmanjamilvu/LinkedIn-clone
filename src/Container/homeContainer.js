import {connect} from 'react-redux'
import Home from '../components/Home'
import { signOutAPI } from '../Services/action/index'

const mapStateToProps = (state) =>({
    User: state.userState.user
})
const mapDispatchToProps =dispatch =>({
    signOutAPI: () => dispatch(signOutAPI())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)