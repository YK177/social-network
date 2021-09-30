import React from 'react';
import s from './Post.module.css'
import {PostType} from '../../../../redux/state';

type PostPropsType = PostType

export const Post: React.FC<PostPropsType> = ({ avatar, name, lastSeen, comment, likeCounter, shareCounter}) => {
    return (
        <div className={s.alt_message}>
            <div className={s.container}>
                <div className={s.top}>
                    <div className={s.avatar}>
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <div className={s.info}>
                        <h4>{name}</h4>
                        <p>{lastSeen} min ago</p>
                    </div>
                </div>
                <div className={s.body}>
                    <p className={s.comment}>
                        {comment}
                    </p>
                    <div className={s.testimonials}>
                        <div className={s.item}>
                            <button>Like</button>
                            <p>{likeCounter} people liked this</p>
                        </div>
                        <div className={s.item}>
                            <button>Share</button>
                            <p>{shareCounter}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}