import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { StoreType } from "../../redux/reduxStore";


type ProfileProps = {
    // store: StoreType //StoreType
    //dispatch: (action: DispatchActionTypes) => void
}

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};
