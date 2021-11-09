import s from './Friends.module.css';
import React from 'react';
import {Friend} from './Friend/Friend';
import {FriendType} from '../../../redux/store';
import {NavLink} from 'react-router-dom';

type FriendsPropsType = {
    friendsList: FriendType[]
}

export const Friends: React.FC<FriendsPropsType> = ({friendsList}) => {

    return (
        <div className={s.container}>
            <NavLink to={'/my-friends/'} className={s.title}>My Friends</NavLink>
            <div className={s.friends}>
                {
                    friendsList.map(f => (
                        <Friend
                            key={f.id}
                            friend={f}
                        />
                    ))
                }
            </div>
        </div>
    )
}

