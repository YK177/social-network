import React from "react";
import s from './Post.module.css'

export type PostPropsType = {
    id: number
    avatar: string
    name: string
    lastSeen: number
    comment: string
    likeCounter: number
    shareCounter: number
}


export const Post = (props: PostPropsType) => {
    return (
        <div className={s.alt_message}>
            <div className={s.container}>
                <div className={s.top}>
                    <div className={s.avatar}>
                        <img src={props.avatar} alt="avatar"/>
                    </div>
                    <div className={s.info}>
                        <h4>{props.name}</h4>
                        <p>{props.lastSeen} min ago</p>
                    </div>
                </div>
                <div className={s.body}>
                    <p className={s.comment}>
                        {props.comment}
                    </p>
                    <div className={s.testimonials}>
                        <div className={s.item}>
                            <button>Like</button>
                            <p>{props.likeCounter} people liked this</p>
                        </div>
                        <div className={s.item}>
                            <button>Share</button>
                            <p>{props.shareCounter}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}