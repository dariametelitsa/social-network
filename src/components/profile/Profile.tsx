import React from 'react';
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { postsProps } from "../../redux/state";


type ProfileProps = {
    profilePage: {
        'posts': postsProps[]
        newPostText: string
    }
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile = ({profilePage, addPost, updateNewPostText}: ProfileProps) => {
    debugger
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} addPost={addPost} newPostChange={profilePage.newPostText} updateNewPostText={updateNewPostText} />
        </div>
    );
};
