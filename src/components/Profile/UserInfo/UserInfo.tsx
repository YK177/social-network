import React from 'react'
import s from './UserInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer'
import avatar from '../../../assets/images/user.jpg'

type UserInfoPropsType = {
    profile: ProfileType
}

export const UserInfo: React.FC<UserInfoPropsType> = ({profile}) => {

    return (
        <>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img
                        src={profile.photos.large || avatar}
                        alt={profile.fullName}/>
                </div>
                <div className={s.body}>
                    <div className={s.username}>
                        {profile.fullName}
                    </div>
                    <div className={s.birthday}>
                        {profile.lookingForAJob}
                    </div>
                    <div className={s.address}>
                        {profile.lookingForAJobDescription}
                    </div>
                    <div className={s.about}>
                        {profile.aboutMe}
                    </div>
                </div>
            </div>

        </>
    )
}