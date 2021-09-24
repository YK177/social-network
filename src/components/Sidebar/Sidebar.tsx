import React from "react";
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className={s.body}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li><NavLink to={'/profile'} className={s.link} activeClassName={s.active}>Profile</NavLink></li>
                    <li><NavLink to={'/dialogs'} className={s.link} activeClassName={s.active}>Dialogs</NavLink></li>
                    <li><NavLink to={'/news'} className={s.link} activeClassName={s.active}>News</NavLink></li>
                    <li><NavLink to={'/music'} className={s.link} activeClassName={s.active}>Music</NavLink></li>
                    <li><NavLink to={'/settings'} className={s.link} activeClassName={s.active}>Settings</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}