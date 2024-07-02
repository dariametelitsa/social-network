// @flow
import * as React from 'react';
import { UserPropsType } from "./UsersContainer";
import s from './Users.module.scss';
import { userApi } from "../../api/usersAPI";

//{users, unfollowUser, followUser, setUsers}: UserPropsType
export const Users = ({users, unfollowUser, followUser, setUsers}: UserPropsType) => {
    if(users.users.length === 0) {

        userApi.getUsers()
            .then(res =>
                setUsers(res))
            .catch(() => {
                setUsers([])
            })

    }

    const photo = 'https://i.ebayimg.com/images/g/hywAAOSwxflZwEwe/s-l1200.webp';
    return (
        <div>
            {
                users.users.map(u => {
                    return (
                        <div key={u.id} className={s.containerUser}>
                            <div className={s.blocksPosition}>
                                <img className={s.avatar} src={u.photos.small || photo} alt={'User avatar'}/>
                                {u.followed
                                ? <button className={s.button} onClick={() => {unfollowUser(u.id)}}>Follow</button>
                                : <button className={s.button} onClick={() => {followUser(u.id)}}>Unfollow</button>
                                }
                            </div>
                            <div className={s.blocksPosition}>
                                <b>{u.name}</b>
                                <span>{u.status}</span>
                            </div>
                            <div className={s.blocksPosition}>
                                <span>Country</span>
                                <span>City</span>
                            </div>
                        </div>)
                })
            }
        </div>
    );
};
