import {connect} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unFollowUser,
    UserType
} from '../../redux/users-reducer'
import React from 'react'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'
import {followAPI, usersAPI} from '../../api/api'

type MapStatePropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number,
    totalUsersCount: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (userId: number, followingInProgress: boolean) => void
}

type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)

        usersAPI
            .getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    onFollowUser = (userId: number) => {
        this.props.toggleFollowingProgress(userId, true)
        followAPI
            .followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.followUser(userId)
                    this.props.toggleFollowingProgress(userId, false)
                }
            })
    }

    onUnfollowUser = (userId: number) => {
        this.props.toggleFollowingProgress(userId, true)
        followAPI
            .unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unFollowUser(userId)
                    this.props.toggleFollowingProgress(userId, false)
                }
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
                                 followUser={this.onFollowUser}
                                 unFollowUser={this.onUnfollowUser}
                        />
                }

            </>

        )
    }
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

export default connect(mapStateToProps, {
    followUser,
    unFollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
})(UsersContainer)

