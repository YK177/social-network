import React from 'react';
import {NewPost} from './NewPost/NewPost';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostPropsType = {
    posts: PostType[]
}

export const MyPost: React.FC<MyPostPropsType> = ({posts}) => {
    return (
        <div>
            <NewPost/>
            {
                posts.map(p => (
                        <Post
                            key={p.id}
                            id={p.id}
                            avatar={p.avatar}
                            name={p.name}
                            lastSeen={p.lastSeen}
                            comment={p.comment}
                            likeCounter={p.likeCounter}
                            shareCounter={p.shareCounter}
                        />
                    )
                )
            }
        </div>
    )
}