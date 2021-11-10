import React from 'react';
import {NewPost} from './NewPost/NewPost';
import {Post} from './Post/Post';
import StoreContext from '../../../StoreContext';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';

export const MyPostContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const postsElements = store.getState().profilePage.posts.map(p => (
                    <Post key={p.id} data={p}/>)
                )

                const addPostCallback = () => store.dispatch(addPostAC())

                const updateTextCallback = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return (
                    <div>
                        <NewPost
                            value={store.getState().profilePage.newPostText}
                            addPost={addPostCallback}
                            updateText={updateTextCallback}
                        />
                        {postsElements}
                    </div>
                )
            }}
        </StoreContext.Consumer>
    )
}