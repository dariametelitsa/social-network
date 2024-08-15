import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { GetUserProfileResponseType } from "api/usersAPI";

type ProfileProps = {
    profile: GetUserProfileResponseType | null
    status: string
    updateStatus: (status: string) => Promise<void>
    // router: {
    //     //location: Object
    //     //navigate: Object
    //     params: Object
    // }
}
export const Profile = ({profile, status, updateStatus}: ProfileProps) => {
    return (
            <div>
                <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
                <MyPostsContainer/>
            </div>
    );
};
