import {addPost, ProfilePageType, updateNewPostText} from '../../../redux/profile-reducer'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/store'
import {MyPost} from './MyPost'

type MapStatePropsType = {
    data: ProfilePageType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.profilePage
    }
}

export const MyPostContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText,
})(MyPost)