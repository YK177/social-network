import React from 'react';
import {MyPost} from './MyPosts/MyPost';
import {UserInfo} from './UserInfo/UserInfo';
import {ActionType, ProfilePageType} from '../../redux/store';

type ProfilePropsType = {
    data: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = ({data, dispatch}) => {
    return (
        <>
            <UserInfo/>
            <MyPost data={data} dispatch={dispatch}/>
        </>
    )
}