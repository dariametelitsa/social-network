// @flow
import * as React from 'react';
import { userApi, UserType } from "../../api/usersAPI";
import { Pagination } from "../../components/pagination/Pagination";
import s from "./Users.module.scss";

type UsersProps = {
    users: UserType[]
    pagesCount: number
    currentPage: number
    onPageChangedHandler: (pageNumber: number) => void
    onLoadMoreUsers: () => void
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
};
export const Users = ({users, pagesCount, currentPage,onPageChangedHandler, onLoadMoreUsers, unfollowUser, followUser}: UsersProps) => {
    const defaultPhoto = 'https://i.ebayimg.com/images/g/hywAAOSwxflZwEwe/s-l1200.webp';
    return (
        <div>
            <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageClick={onPageChangedHandler}/>
            {
                users.map(u => {
                    return (
                        <div key={u.id} className={s.containerUser}>
                            <div className={s.blocksPosition}>
                                <img className={s.avatar} src={u.photos.small || defaultPhoto}
                                     alt={'User avatar'}/>
                                {u.followed
                                    ? <button className={s.button} onClick={() => {
                                        unfollowUser(u.id)
                                    }}>Follow</button>
                                    : <button className={s.button} onClick={() => {
                                        followUser(u.id)
                                    }}>Unfollow</button>
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
                        </div>
                    )
                })
            }
            <button onClick={() => onLoadMoreUsers()}>Load more...</button>
        </div>)
};