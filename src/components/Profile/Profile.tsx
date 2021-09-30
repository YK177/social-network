import React from 'react';
import {MyPost} from './MyPosts/MyPost';
import {UserInfo} from './UserInfo/UserInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    data: ProfilePageType
}

export const Profile: React.FC<ProfilePropsType> = ({data}) => {
    return (
        <>
            <UserInfo/>
            <MyPost posts={data.posts}/>
        </>
    )
}
