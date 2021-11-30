import {UserType} from '../../redux/users-reducer'
import React from 'react'
import s from './Users.module.css'
import {User} from './User/User'

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: UserType[]
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = props.currentPage; i <= pagesCount; i++) {
        pages.push(i)
        if (pages.length === 10) break
    }

    return (
        <div className={s.usersPage}>
            <div className={s.pagination}>
                {
                    pages.map(page => {
                        return (
                            <button
                                onClick={() => props.onPageChanged(page)}
                                className={`btn ${page === props.currentPage && s.selected}`}
                                key={page}>
                                {page}
                            </button>
                        )
                    })
                }
            </div>
            <div className={s.users}>
                {
                    props.users.map(user => {
                        return (
                            <User key={user.id} user={user} followUser={props.followUser}
                                  unFollowUser={props.unFollowUser}/>
                        )
                    })
                }</div>
        </div>
    )
}

