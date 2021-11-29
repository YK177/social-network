import React from 'react'
import {UserInfo} from './UserInfo/UserInfo'
import {MyPostContainer} from './MyPosts/MyPostContainer'
import {ProfileType} from '../../redux/profile-reducer'

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    return (
        <>
            <UserInfo profile={profile}/>
            <MyPostContainer/>
        </>
    )
}