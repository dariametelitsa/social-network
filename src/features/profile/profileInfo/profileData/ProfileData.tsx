// @flow
import * as React from 'react';
import s from "features/profile/profileInfo/ProfileInfo.module.scss";
import { Contacts } from "components/common/contacts/Contacts";
import { GetUserProfileResponseType } from "api/usersAPI";

type Props = {
    profile: GetUserProfileResponseType
};

export const ProfileData = ({profile}: Props) => {

    return (
        <div className={s.info}>
            <b className={s.name}>{profile.fullName}</b>
            <p>Looking for a job: {profile.lookingForAJobDescription ? 'yes' : 'no'}</p>
            {profile.lookingForAJob &&
                <p>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </p>}
            <p>About me: {profile.aboutMe || 'no information'}</p>
            <div><b>Contacts</b>: <Contacts contacts={profile.contacts}/></div>
        </div>
    );
};