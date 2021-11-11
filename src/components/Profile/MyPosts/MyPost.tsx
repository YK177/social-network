import {NewPost} from './NewPost/NewPost';
import React from 'react';
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../redux/profile-reducer';

type MyPostPropsType = {
    data: ProfilePageType
    addPostCallback: () => void
    updateTextCallback: (text: string) => void
}

export const MyPost: React.FC<MyPostPropsType> = ({data, addPostCallback, updateTextCallback}) => {
    const postsElements = data.posts.map(p => (
        <Post key={p.id} data={p}/>)
    )

    return (
        <div>
            <NewPost
                value={data.newPostText}
                addPost={addPostCallback}
                updateText={updateTextCallback}
            />
            {postsElements}
        </div>
    )
}