import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.body}>
            <div className={s.logo}>
                <img src="https://placeimg.com/100/100/tech" alt="logo"/>
            </div>
            <div>
                {
                    props.isAuth
                        ? <span className={s.login}>{props.login}</span>
                        : <NavLink to={'/login'} className={'btn-login'}>login</NavLink>
                }
            </div>
        </header>
    )
}