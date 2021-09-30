import s from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li><NavLink to={'/profile'} className={s.link} activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to={'/dialogs'} className={s.link} activeClassName={s.active}>Dialogs</NavLink></li>
                <li><NavLink to={'/news'} className={s.link} activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to={'/music'} className={s.link} activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to={'/settings'} className={s.link} activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}