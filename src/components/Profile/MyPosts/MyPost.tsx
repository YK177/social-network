import React from 'react';
import {NewPost} from './NewPost/NewPost';
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../redux/profile-reducer';
import { ActionType } from '../../../redux/redux-store';

type MyPostPropsType = {
    data: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const MyPost: React.FC<MyPostPropsType> = ({data, dispatch}) => {

    const postsElements = data.posts.map(p => (
        <Post
            key={p.id}
            id={p.id}
            avatar={p.avatar}
            name={p.name}
            lastSeen={p.lastSeen}
            comment={p.comment}
            likeCounter={p.likeCounter}
            shareCounter={p.shareCounter}
    />))

    return (
        <div>
            <NewPost value={data.newPostText} dispatch={dispatch}/>
            {postsElements}
        </div>
    )
}