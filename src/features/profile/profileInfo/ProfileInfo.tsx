// @flow
import * as React from 'react';
import s from "./ProfileInfo.module.scss";
import { GetUserProfileResponseType } from "api/usersAPI";
import Preloader from "../../../components/common/preloader/Preloader";
import { ProfileStatus } from "./profileStatus/ProfileStatus";
import { ChangeEvent, useState } from "react";
import { ProfileData } from "features/profile/profileInfo/profileData/ProfileData";
import { ProfileDataForm } from "features/profile/profileInfo/profileData/ProfileDataForm";

type Props = {
    profile: GetUserProfileResponseType | null
    status: string
    updateStatus: (status: string) => Promise<void>
    isOwner: boolean
    saveAvatar: (photo: File) => void
};

export const ProfileInfo = ({profile, status, updateStatus, isOwner, saveAvatar}: Props) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const defaultPhoto = 'https://www.film.ru/sites/default/files/people/1564966-1099943.jpg';
    const onAvatarPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length) {
            saveAvatar(e.target.files[0]);
        }
    }

    const onEditModeChange = () => {
        setIsEditMode(state => !state);
    }

    return (
        profile
            ? (<div>
                <img className={s.bgImage} height={'200'} src={'https://www.kino-teatr.ru/news/30463/272783.jpg'}
                     alt={'Background image.'}/>
                {isOwner &&
                    (<div className={s.changePhotoBlock}>
                        <label htmlFor={'newAvatar'}>Change photo of profile </label>
                        <input type="file" id="newAvatar" accept={'.jpg, .jpeg, .png'} onChange={(e) => onAvatarPhotoSelected(e)}/>
                    </div>)}
                <div className={s.description}>
                    <img className={s.avatar} src={profile.photos.large || defaultPhoto} alt={'Avatar'}/>
                    {isEditMode ? <ProfileDataForm profile={profile}/> : <ProfileData profile={profile}/>}
                    <button onClick={onEditModeChange}>{isEditMode ? 'Save changes' : 'Edit information'}</button>
                    <div>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
            </div>)
            : <Preloader/>
    );
};