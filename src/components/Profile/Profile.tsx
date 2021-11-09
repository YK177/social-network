import React from 'react';
import {MyPost} from './MyPosts/MyPost';
import {UserInfo} from './UserInfo/UserInfo';
import {GeneralActionType, ProfilePageType} from '../../redux/store';

type ProfilePropsType = {
    data: ProfilePageType
    dispatch: (action: GeneralActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = ({data, dispatch}) => {
    return (
        <>
            <UserInfo/>
            <MyPost data={data} dispatch={dispatch}/>
        </>
    )
}