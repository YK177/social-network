import React from 'react'
import s from './Login.module.css'

export const Login = () => {
    return (
        <div className={s.container}>
            <div className={s.body}>
                <h2 className={s.title}>Welcome to Social Network</h2>
                <form className={s.form}>
                    <input type="email" placeholder={'Email'} className={s.input} />
                    <input type="password" placeholder={'Password'} className={s.input} />
                    <button type={'submit'} className={s.submit}>Login</button>
                </form>
            </div>
        </div>
    )
}