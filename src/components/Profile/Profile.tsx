import React from 'react';
import {UserInfo} from './UserInfo/UserInfo';
import {MyPostContainer} from './MyPosts/MyPostContainer';


export const Profile = () => {
    return (
        <>
            <UserInfo/>
            <MyPostContainer />
        </>
    )
}