import React from "react";
import {MyPost} from "./MyPosts/MyPost";
import {UserInfo} from "./UserInfo/UserInfo";
import {PostsType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostsType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <UserInfo/>
            <MyPost posts={props.posts}/>
        </>
    )
}
