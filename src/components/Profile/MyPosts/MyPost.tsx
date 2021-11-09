import React from 'react';
import {NewPost} from './NewPost/NewPost';
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../redux/state';

type MyPostPropsType = {
    data: ProfilePageType
    addPost: () => void
    changeTextForNewPost:(newText: string)=>void
}

export const MyPost: React.FC<MyPostPropsType> = ({data, addPost,changeTextForNewPost}) => {

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
            <NewPost value={data.newPostText} addPost={addPost} changeTextForNewPost={changeTextForNewPost}/>
            {postsElements}
        </div>
    )
}