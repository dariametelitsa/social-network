import React from 'react';
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { postsProps } from "../../redux/state";


type ProfileProps = {
    profilePage: {
        'posts': postsProps[]
        newPostText: string
    }
    dispatch: (action: any) => void
}

export const Profile = ({profilePage, dispatch}: ProfileProps) => {
    debugger
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} newPostChange={profilePage.newPostText} dispatch={dispatch} />
        </div>
    );
};
