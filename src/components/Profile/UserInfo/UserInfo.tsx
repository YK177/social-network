import React from "react";
import s from './UserInfo.module.css';

export const UserInfo = () => {
    return (
        <>
            <div className={s.background}>
                <img
                    src="https://images.unsplash.com/photo-1613379293095-d81837c1502d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="profile background"/>
            </div>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img
                        src="https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg"
                        alt="avatar"/>
                </div>
                <div className={s.body}>
                    <div className={s.username}>
                        Erik Jhonson
                    </div>
                    <div className={s.birthday}>
                        21 March 1991
                    </div>
                    <div className={s.address}>
                        Melbourne, Australia
                    </div>
                    <div className={s.about}>
                        I Don’t know how? But i believe that it is possible one day if i stay with
                        my dream all time.
                    </div>
                </div>
            </div>
        </>
    )
}