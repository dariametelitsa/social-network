import React from 'react';
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { postsProps } from "../../redux/state";


type ProfileProps = {
    posts: postsProps[]
    addPost: (postMessage: string) => void
}

export const Profile = ({posts, addPost}: ProfileProps) => {
    debugger
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost} />
        </div>
    );
};
