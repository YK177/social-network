import React from 'react'
import {MyPostContainer} from './MyPosts/MyPostContainer'
import {ProfileType} from '../../redux/profile-reducer'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, status, updateUserStatus}) => {
    return (
        <>
            <ProfileInfo profile={profile}
                         status={status}
                         updateUserStatus={updateUserStatus}/>

            <MyPostContainer/>
        </>
    )
}