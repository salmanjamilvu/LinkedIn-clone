import {connect} from 'react-redux'
import PostModal from '../components/PostModal'
import { postArticleAPI } from '../Services/action/index'

const mapStateToProps = (state) =>({
    User: state.userState.user
})
const mapDispatchToProps =dispatch =>({
    submitHandle: (payload) => dispatch(postArticleAPI(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(PostModal)