import s from './Friends.module.css';
import React from 'react';
import {Friend} from './Friend/Friend';
import {NavLink} from 'react-router-dom';
import StoreContext from '../../../StoreContext';

export const FriendsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const mappedFriends = store.getState().sideBar.friends.map(f => (
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
                        </div>)
                }
            }
        </StoreContext.Consumer>
    )
}

