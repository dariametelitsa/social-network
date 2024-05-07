import React from 'react';
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { PostsProps } from "../../index";


type ProfileProps = {
    posts: PostsProps[];
}

export const Profile = ({posts}: ProfileProps) => {
    debugger
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    );
};
