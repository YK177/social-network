import {UserType} from '../../redux/users-reducer'
import React from 'react'
import s from './Users.module.css'
import avatar from '../../assets/images/user.jpg'

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
                                className={`${s.btn} ${page === props.currentPage ? s.selected : ''}`}
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
                        const onFollowHandler = () => {
                            props.followUser(user.id)
                        }
                        const onUnfollowHandler = () => {
                            props.unFollowUser(user.id)
                        }
                        return (
                            <div key={user.id} className={s.user}>
                                <div className={s.avatar}>
                                    <img
                                        src={user.photos.small || avatar}
                                        alt={user.name}/>
                                </div>
                                <div className={s.info}>
                                    <p className={s.name}>{user.name}</p>
                                    <p className={s.status}>{user.status}</p>
                                    <div className={s.btn_wrapper}>
                                        {
                                            user.followed
                                                ? (<button className={s.btn}
                                                           onClick={onUnfollowHandler}>
                                                    Unfollow
                                                </button>)
                                                : (<button className={s.btn}
                                                           onClick={onFollowHandler}>
                                                    Follow
                                                </button>)
                                        }
                                    </div>
                                </div>
                            </div>)
                    })
                }</div>
        </div>
    )
}