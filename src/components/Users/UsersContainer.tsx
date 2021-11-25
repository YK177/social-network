import {connect} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {Dispatch} from 'redux'
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCount,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowUserAC,
    UserType
} from '../../redux/users-reducer'
import React from 'react'
import axios from 'axios'
import {Users} from './Users'
import {Preloader} from '../common/Preloader'

type UsersAPIPropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setPage(page)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users totalUsersCount={this.props.totalUsersCount}
                                 pageSize={this.props.pageSize}
                                 currentPage={this.props.currentPage}
                                 onPageChanged={this.onPageChanged}
                                 users={this.props.users}
                                 followUser={this.props.followUser}
                                 unFollowUser={this.props.unFollowUser}
                        />
                }

            </>

        )
    }
}

type MapStatePropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followUser: (userID: number) => {
            dispatch(followUserAC(userID))
        },
        unFollowUser: (userID: number) => {
            dispatch(unFollowUserAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

