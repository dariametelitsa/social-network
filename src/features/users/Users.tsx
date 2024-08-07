// @flow
import * as React from 'react';
import { UserType } from "../../api/usersAPI";
import { Pagination } from "../../components/pagination/Pagination";
import s from "./Users.module.scss";
import { Link } from "react-router-dom";
import { PATH } from "../../routes/PATHS";

type UsersProps = {
    users: UserType[]
    pagesCount: number
    currentPage: number
    onPageChangedHandler: (pageNumber: number) => void
    onLoadMoreUsers: () => void
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
    followingInProgress: Array<number>
};
export const Users = ({
                          users,
                          pagesCount,
                          currentPage,
                          onPageChangedHandler,
                          onLoadMoreUsers,
                          unfollowUser,
                          followUser,
                          followingInProgress,
                      }: UsersProps) => {
    const defaultPhoto = 'https://i.ebayimg.com/images/g/hywAAOSwxflZwEwe/s-l1200.webp';
    const isDisabled = (userId: number) => {
        return typeof followingInProgress.find(u => u === userId)  === 'number';
    }
    return (
        <div>
            <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageClick={onPageChangedHandler}/>
            {
                users.map(u => {
                    return (
                        <div key={u.id} className={s.containerUser}>
                            <div className={s.blocksPosition}>
                                <Link to={`${PATH.PROFILE}/${u.id}`}>
                                    <img className={s.avatar} src={u.photos.small || defaultPhoto}
                                         alt={'User avatar'}/>
                                </Link>
                                {u.followed
                                    ? <button disabled={isDisabled(u.id)} className={s.button} onClick={() => {
                                        unfollowUser(u.id);
                                    }}>Follow</button>
                                    : <button disabled={isDisabled(u.id)}  className={s.button + ' ' + s.unfollow} onClick={() => {
                                        followUser(u.id);
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
                                <span>{u.id}</span>
                            </div>
                        </div>
                    )
                })
            }
            <button onClick={() => onLoadMoreUsers()}>Load more...</button>
        </div>)
};