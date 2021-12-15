import {UserType} from '../../redux/users-reducer'
import React from 'react'
import s from './Users.module.css'
import {User} from './User/User'

type UsersPropsType = {
    users: UserType[]
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
}
export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    followUser,
                                                    unfollowUser,
                                                }) => {

    return (
        <div className={s.users}>
            {
                users.map(user => {
                    return (
                        <User key={user.id}
                              user={user}
                              followUser={followUser}
                              unfollowUser={unfollowUser}
                        />
                    )
                })
            }</div>
    )
}