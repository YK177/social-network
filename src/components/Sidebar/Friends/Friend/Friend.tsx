import {NavLink} from 'react-router-dom';
import s from './Friend.module.css';
import React from 'react';
import {FriendType} from '../../../../redux/sidebar-reducer';

type FriendPropsType = {
    friend: FriendType
}

export const Friend:React.FC<FriendPropsType> = ({friend}) => {
    let path = `/my-friends/${friend.id}`

    return (
        <NavLink to={path} className={s.friend} activeClassName={s.active}>
            <div className={s.avatar}>
                <img
                    src={friend.avatar}
                    alt="avatar"/>
            </div>
            <div className={s.name}>
                <span className={s.item}>{friend.firstName}</span>
                <span className={s.item}>{friend.lastName}</span>
            </div>
        </NavLink>
    )
}