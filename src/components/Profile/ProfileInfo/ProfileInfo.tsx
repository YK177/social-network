import React from 'react'
import s from './UserInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer'
import avatar from '../../../assets/images/user.jpg'
import {ProfileStatus} from './ProfileStatus/ProfileStatus'
import {Preloader} from '../../common/Preloader/Preloader'

type UserInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo: React.FC<UserInfoPropsType> = ({profile, status,updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img
                        src={profile.photos.small || avatar}
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
            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
        </>
    )
}

