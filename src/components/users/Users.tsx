// @flow
import * as React from 'react';
import { UserPropsType } from "./UsersContainer";
import s from './Users.module.scss';

//{users, unfollowUser, followUser, setUsers}: UserPropsType
export const Users = ({users, unfollowUser, followUser, setUsers}: UserPropsType) => {
    return (
        <div>
            {
                users.users.map(u => {
                    return (
                        <div key={u.id} className={s.containerUser}>
                            <div className={s.blocksPosition}>
                                <img className={s.avatar} src={u.photoUrl} alt={'User avatar'}/>
                                <button onClick={() => {
                                }}>Follow
                                </button>
                            </div>
                            <div className={s.blocksPosition}>
                                <b>{u.fullName}</b>
                                <span>{u.status}</span>
                            </div>
                            <div className={s.blocksPosition}>
                                <span>{u.location.country}</span>
                                <span>{u.location.city}</span>
                            </div>
                        </div>)
                })
            }
        </div>
    );
};