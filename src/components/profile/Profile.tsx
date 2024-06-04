import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { StoreType } from "../../redux/reduxStore";


type ProfileProps = {
    store: StoreType //StoreType
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
