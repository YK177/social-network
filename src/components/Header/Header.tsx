import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.body}>
            <div className={s.logo}>
                <img src="https://placeimg.com/100/100/tech" alt="logo"/>
            </div>
        </header>
    )
}