import React from "react";
import {MyPost} from "./MyPosts/MyPost";
import {UserInfo} from "./UserInfo/UserInfo";


export const Profile = () => {
    return (
        <>
            <UserInfo/>
            <MyPost/>
        </>
    )
}
