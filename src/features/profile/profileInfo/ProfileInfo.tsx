// @flow
import * as React from 'react';
import s from "./ProfileInfo.module.scss";
import { GetUserProfileResponseType } from "api/usersAPI";
import Preloader from "../../../components/common/preloader/Preloader";
import { ProfileStatus } from "./profileStatus/ProfileStatus";
import { ChangeEvent, ChangeEventHandler } from "react";


type Props = {
    profile: GetUserProfileResponseType | null
    status: string
    updateStatus: (status: string) => Promise<void>
    isOwner: boolean
    savePhoto: (photo: File) => void
};

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: Props) => {
    const defaultPhoto = 'https://www.film.ru/sites/default/files/people/1564966-1099943.jpg';

    const onAvatarPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        profile
            ? (<div>
                <img className={s.bgImage} height={'200'} src={'https://www.kino-teatr.ru/news/30463/272783.jpg'}
                     alt={'Background image.'}/>
                <div className={s.description}>
                    <img className={s.avatar} src={profile.photos.small || defaultPhoto} alt={'Avatar'}/>
                    <div className={s.info}>
                        <b className={s.name}>{profile.fullName}</b>
                        <p>{profile.aboutMe}</p>
                        <p>{profile.lookingForAJobDescription}</p>
                        <div>
                            <ProfileStatus status={status} updateStatus={updateStatus}/>
                        </div>
                    </div>
                </div>
                {isOwner &&
                    (<div className={s.changePhotoBlock}>
                        <label htmlFor={'newAvatar'}>Change photo of profile </label>
                        <input type="file" id="newAvatar" accept={'.jpg, .jpeg, .png'} onChange={(e) => onAvatarPhotoSelected(e)}/>
                    </div>)}
            </div>)
            : <Preloader/>
    );
};