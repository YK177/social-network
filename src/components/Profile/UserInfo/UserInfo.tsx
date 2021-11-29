import React from 'react'
import s from './UserInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer'
import {Preloader} from '../../common/Preloader'
import avatar from '../../../assets/images/user.jpg'

type UserInfoPropsType = {
    profile: ProfileType
}

export const UserInfo: React.FC<UserInfoPropsType> = ({profile}) => {


    return (
        <>
            <div className={s.background}>
                <img
                    src="https://images.unsplash.com/photo-1613379293095-d81837c1502d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="profile background"/>
            </div>
            {
                profile === undefined
                    ? <Preloader/>
                    : <div className={s.container}>
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
            }
        </>
    )
}