import React from 'react';
import {MyPost} from './MyPosts/MyPost';
import {UserInfo} from './UserInfo/UserInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    data: ProfilePageType
    addPost: () => void
    changeTextForNewPost:(newText: string)=>void
}

export const Profile: React.FC<ProfilePropsType> = ({data, addPost, changeTextForNewPost}) => {
    return (
        <>
            <UserInfo/>
            <MyPost data={data} addPost={addPost} changeTextForNewPost={changeTextForNewPost}/>
        </>
    )
}