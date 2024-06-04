import React from 'react';
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { DispatchActionTypes, postsProps } from "../../redux/store";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { StoreType } from "../../redux/reduxStore";


type ProfileProps = {
    store: any //StoreType
    //dispatch: (action: DispatchActionTypes) => void
}

export const Profile = ({store}: ProfileProps) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={store} />
        </div>
    );
};
