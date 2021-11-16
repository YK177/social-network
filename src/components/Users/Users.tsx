import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/images/user.jpg';
import axios from 'axios';
import {UserType} from '../../redux/users-reducer';

type UsersPropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.users}>
                <div>
                    {
                        pages.map(page => {
                            return (
                                <button
                                    onClick={() => this.onPageChanged(page)}
                                    className={page === this.props.currentPage ? s.selected : ''}
                                    key={page}>
                                    {page}
                                </button>)
                        })
                    }
                </div>
                {
                    this.props.users.map(user => {
                        const onFollowHandler = () => {
                            this.props.followUser(user.id)
                        }
                        const onUnfollowHandler = () => {
                            this.props.unFollowUser(user.id)
                        }
                        return (
                            <div
                                key={user.id}>
                                < div>
                                    < div>
                                        < img
                                            src={user.photos.small || avatar}
                                            alt={user.name}
                                        />
                                    </div>
                                    {
                                        user.followed
                                            ? <button onClick={onUnfollowHandler}>Unfollow</button>
                                            : <button onClick={onFollowHandler}>Follow</button>
                                    }
                                </div>
                                <div>
                                    <div>
                                        <span>{user.name}</span>
                                        <span>{user.status}</span>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>
        )
    }
}