import * as React from 'react';
import { UserType } from "api/usersAPI";
import { Pagination } from "components/pagination/Pagination";
import s from "./Users.module.scss";
import { User } from "features/users/User";

type UsersProps = {
    users: UserType[]
    isFiltered: boolean
    isFilterUsers: (isFiltered: boolean) => void
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
                          isFiltered,
                          isFilterUsers,
                          pagesCount,
                          currentPage,
                          onPageChangedHandler,
                          onLoadMoreUsers,
                          unfollowUser,
                          followUser,
                          followingInProgress,
                      }: UsersProps) => {

    const isDisabled = (userId: number) => {
        return typeof followingInProgress.find(u => u === userId) === 'number';
    }


    return (
        <div>
            <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageClick={onPageChangedHandler}/>
            <div className={s.filterContainer}>
                {isFiltered
                    ? <button onClick={() => isFilterUsers(false)} className={s.button}>Show all users</button>
                    : <button onClick={() => isFilterUsers(true)} className={s.button + ' ' + s.filter}>Show users with photo</button>}
            </div>
            {
                users.map(u => {
                    return <User key={u.id} user={u} isDisabled={isDisabled} unfollowUser={unfollowUser} followUser={followUser}/>
                })
            }
            <button onClick={() => onLoadMoreUsers()}>Load more...</button>
        </div>)
};