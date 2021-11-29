import React from 'react'
import {Post} from './Post/Post'
import {ProfilePageType} from '../../../redux/profile-reducer'
import {AddItemForm} from '../../common/AddItemForm/AddItemForm'

type MyPostPropsType = {
    data: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPost: React.FC<MyPostPropsType> = ({data, addPost, updateNewPostText}) => {

    const postsElements = data.posts.map(p => (
        <Post key={p.id} data={p}/>)
    )

    return (
        <div>
            <AddItemForm
                value={data.newPostText}
                addItem={addPost}
                updateText={updateNewPostText}>Add post</AddItemForm>
            {postsElements}
        </div>
    )
}