import React from 'react'
import s from './SideBar.module.css'
import {NavBar} from './NavBar/NavBar'
import {FriendsContainer} from './Friends/FriendsContainer'


export const SideBar = () => {
    return (
        <div className={s.body}>
            <NavBar/>
            <FriendsContainer/>
        </div>
    )
}

