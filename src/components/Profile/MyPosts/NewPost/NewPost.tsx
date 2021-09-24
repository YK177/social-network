import React from "react";
import s from './NewPost.module.css';

export const NewPost = () => {
    return (
        <div className={s.body}>
            <textarea className={s.textarea} placeholder={'Say something'}/>
            <div className={s.btn_wrapper}>
                <button className={s.btn}>add post</button>
            </div>
        </div>
    )
}