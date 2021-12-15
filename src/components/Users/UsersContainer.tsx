import {connect} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {follow, getUsers, setCurrentPage, unfollow, UserType} from '../../redux/users-reducer'
import React from 'react'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'
import s from './Users.module.css'
import {Pagination} from './Pagination/Pagination'

type MapStatePropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number,
    totalUsersCount: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
    }

    onFollowUser = (userId: number) => {
        this.props.follow(userId)
    }

    onUnfollowUser = (userId: number) => {
        this.props.unfollow(userId)
    }

    render() {
        return (
            <div className={s.usersPage}>
                <Pagination totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}/>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users
                            users={this.props.users}
                            followUser={this.onFollowUser}
                            unfollowUser={this.onUnfollowUser}
                        />
                }
            </div>

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
    setCurrentPage,
    getUsers,
    follow,
    unfollow,
})(UsersContainer)