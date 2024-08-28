import * as React from 'react';
import s from "features/users/Users.module.scss";
import { Link } from "react-router-dom";
import { PATH } from "common/routes/PATHS";
import { UserType } from "api/usersAPI";

type Props = {
    user: UserType
    isDisabled: (userId: number) => boolean
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
};
export const User = ({user, isDisabled, unfollowUser, followUser}: Props) => {
    const defaultPhoto = 'https://i.ebayimg.com/images/g/hywAAOSwxflZwEwe/s-l1200.webp';


    return (
        <div className={s.containerUser}>
            <div className={s.blocksPosition}>
                <Link to={`${PATH.PROFILE}/${user.id}`}>
                    <img className={s.avatar} src={user.photos.small || defaultPhoto}
                         alt={'User avatar'}/>
                </Link>
                {user.followed
                    ? <button disabled={isDisabled(user.id)} className={s.button} onClick={() => {
                        unfollowUser(user.id);
                    }}>Follow</button>
                    : <button disabled={isDisabled(user.id)} className={s.button + ' ' + s.unfollow}
                              onClick={() => {
                                  followUser(user.id);
                              }}>Unfollow</button>
                }
            </div>
            <div className={s.blocksPosition}>
                <b>{user.name}</b>
                <span>{user.status}</span>
            </div>
            <div className={s.blocksPosition}>
                <span>Country</span>
                <span>City</span>
                <span>{user.id}</span>
            </div>
        </div>
    );
};