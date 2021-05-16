import {connect} from 'react-redux'
import MianPosts from '../components/MianPosts'
import { getPostAPI } from '../Services/action/index'

const mapStateToProps = (state) =>({
    User: state.userState.user,
    Posts: state.userState.posts,
})
const mapDispatchToProps =dispatch =>({
    getPosts: () => dispatch(getPostAPI())
})
export default connect(mapStateToProps, mapDispatchToProps)(MianPosts)