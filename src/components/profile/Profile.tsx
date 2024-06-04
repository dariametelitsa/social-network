import React from 'react';
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { DispatchActionTypes, postsProps } from "../../redux/store";


type ProfileProps = {
    profilePage: {
        'posts': postsProps[]
        newPostText: string
    }
    dispatch: (action: DispatchActionTypes) => void
}

export const Profile = ({profilePage, dispatch}: ProfileProps) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} newPostChange={profilePage.newPostText} dispatch={dispatch} />
        </div>
    );
};
