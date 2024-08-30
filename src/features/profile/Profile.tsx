import React from 'react';
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { GetUserProfileResponseType } from "api/usersAPI";
import { saveAvatar } from "redux/thunks/profileThunks";

type Props = {
    profile: GetUserProfileResponseType | null
    status: string
    updateStatus: (status: string) => Promise<void>
    isOwner: boolean
    saveAvatar: (photo: File) => void
    // router: {
    //     //location: Object
    //     //navigate: Object
    //     params: Object
    // }
}
export const Profile = ({profile, status, updateStatus, isOwner, saveAvatar}: Props) => {
    return (
            <div>
                <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} saveAvatar={saveAvatar}/>
                <MyPostsContainer/>
            </div>
    );
};
