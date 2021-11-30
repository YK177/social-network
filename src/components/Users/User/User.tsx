import {UserType} from '../../../redux/users-reducer'
import React from 'react'
import {NavLink} from 'react-router-dom'
import avatar from '../../../assets/images/user.jpg'
import s from './User.module.css'

type UserPropsType = {
    user: UserType
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
}
export const User: React.FC<UserPropsType> = ({user, followUser, unFollowUser}) => {

    const onFollowHandler = () => {
        followUser(user.id)
    }

    const onUnfollowHandler = () => {
        unFollowUser(user.id)
    }

    return (
        <div className={s.user}>
            <NavLink to={'/profile/' + user.id}>
                <div className={s.avatar}>
                    <img
                        src={user.photos.small || avatar}
                        alt={user.name}/>
                </div>
            </NavLink>
            <div className={s.info}>
                <p className={s.name}>{user.name}</p>
                <p className={s.status}>{user.status}</p>
                <div className={s.btn_wrapper}>
                    {
                        user.followed
                            ? (<button className={`btn ${user.followingInProgress && 'disabled'}`}
                                       disabled={user.followingInProgress}
                                       onClick={onUnfollowHandler}>
                                Unfollow
                            </button>)
                            : (<button className={`btn ${user.followingInProgress && 'disabled'}`}
                                       disabled={user.followingInProgress}
                                       onClick={onFollowHandler}>
                                Follow
                            </button>)
                    }
                </div>
            </div>
        </div>
    )
}