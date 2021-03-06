import {connect} from 'react-redux'
import {Friends} from './Friends'
import {FriendType} from '../../../redux/sidebar-reducer'
import {AppStateType} from '../../../redux/store'

type MapStatePropsType = {
    data: FriendType[]
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.sideBar.friends
    }
}

export const FriendsContainer = connect(mapStateToProps)(Friends)


