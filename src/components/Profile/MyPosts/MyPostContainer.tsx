import {addPostAC, ProfilePageType, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import {Dispatch} from 'redux';
import {MyPost} from './MyPost';

type MapStatePropsType = {
    data: ProfilePageType
}
type MapDispatchPropsType = {
    addPostCallback: () => void
    updateTextCallback: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostCallback: () => {
            dispatch(addPostAC())
        },
        updateTextCallback: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)