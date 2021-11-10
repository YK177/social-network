import React from 'react';
import s from './Post.module.css'
import {PostType} from '../../../../redux/profile-reducer';

type PostPropsType = {
    data:PostType
}

export const Post: React.FC<PostPropsType> = ({ data}) => {
    return (
        <div className={s.alt_message}>
            <div className={s.container}>
                <div className={s.top}>
                    <div className={s.avatar}>
                        <img src={data.avatar} alt="avatar"/>
                    </div>
                    <div className={s.info}>
                        <h4>{data.name}</h4>
                        <p>{data.lastSeen} min ago</p>
                    </div>
                </div>
                <div className={s.body}>
                    <p className={s.comment}>
                        {data.comment}
                    </p>
                    <div className={s.testimonials}>
                        <div className={s.item}>
                            <button>Like</button>
                            <p>{data.likeCounter} people liked this</p>
                        </div>
                        <div className={s.item}>
                            <button>Share</button>
                            <p>{data.shareCounter} shared your post</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}