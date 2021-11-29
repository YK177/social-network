import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import React from 'react'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li><NavLink to={'/profile'} className={s.link} activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to={'/dialogs'} className={s.link} activeClassName={s.active}>Dialogs</NavLink></li>
                <li><NavLink to={'/users'} className={s.link} activeClassName={s.active}>Users</NavLink></li>
                <li><NavLink to={'/settings'} className={s.link} activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}