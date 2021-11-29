import s from './Friends.module.css'
import React from 'react'
import {Friend} from './Friend/Friend'
import {NavLink} from 'react-router-dom'
import {FriendType} from '../../../redux/sidebar-reducer'

type FriendsPropsType = {
    data: FriendType[]
}

export const Friends: React.FC<FriendsPropsType> = ({data}) => {

    const mappedFriends = data.map(f => (
        <Friend
            key={f.id}
            friend={f}
        />
    ))

    return (
        <div className={s.container}>
            <NavLink to={'/my-friends/'} className={s.title}>My Friends</NavLink>
            <div className={s.friends}>
                {mappedFriends}
            </div>
        </div>
    )
}

