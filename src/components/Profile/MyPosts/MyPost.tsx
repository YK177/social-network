import React from "react";
import { PostsType } from "../../..";

import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";

type MyPostType = {
    posts: Array<PostsType>
}

export const MyPost = (props: MyPostType) => {
    return (
        <div>
            <NewPost/>
            {
                props.posts.map(p => {
                    return (
                        <Post
                            key={p.id}
                            id={p.id}
                            avatar={p.avatar}
                            name={p.name}
                            lastSeen={p.lastSeen}
                            comment={p.comment}
                            likeCounter={p.likeCounter}
                            shareCounter={p.shareCounter}
                        />
                    )
                })
            }
        </div>
    )
}