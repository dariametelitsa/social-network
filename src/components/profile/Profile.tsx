import React from 'react';
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { postsProps } from "../../redux/state";


type ProfileProps = {
    posts: postsProps[];
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
