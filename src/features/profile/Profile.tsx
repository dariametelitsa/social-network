import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { GetUserProfileResponseType } from "../../api/usersAPI";

type ProfileProps = {
    profile: GetUserProfileResponseType | null
    // router: {
    //     //location: Object
    //     //navigate: Object
    //     params: Object
    // }
}
export const Profile = ({profile}: ProfileProps) => {
    return (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    );
};
