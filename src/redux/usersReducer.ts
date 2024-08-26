import { UserType } from "api/usersAPI";
import { UsersPageType } from "common/types/types";

export const followUser = (userId: number) => ({type: 'samurai-network/users/FOLLOW_USER', userId}) as const;
export const unfollowUser = (userId: number) => ({type: 'samurai-network/users/UNFOLLOW_USER', userId}) as const;
export const setUsers = (users: UserType[], extended: boolean = false) => ({type: 'samurai-network/users/SET_USERS', users, extended}) as const;
export const setCurrentPage = (currentPage: number) => ({type: 'samurai-network/users/SET_CURRENT_PAGE', currentPage}) as const;
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'samurai-network/users/SET_TOTAL_USER_COUNT', totalUsersCount}) as const;
export const setIsFetching = (isFetching: boolean) => ({type: 'samurai-network/users/SET_IS_FETCHING', isFetching}) as const;
export const toggleFollowingUser = (userId: number, isFollowing: boolean) => ({type: 'samurai-network/users/TOGGLE_FOLLOWING_USER', userId, isFollowing}) as const;

export type UserActionType =
    | ReturnType<typeof followUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof unfollowUser>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleFollowingUser>

const initialState: UsersPageType = {
    users: [] as UserType[],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state: UsersPageType = initialState, action: UserActionType): UsersPageType => {
    switch (action.type) {
        case 'samurai-network/users/FOLLOW_USER': {
            return {
                ...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        }
        case "samurai-network/users/UNFOLLOW_USER": {
            return {
                ...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        }
        case "samurai-network/users/SET_USERS": {
            if(action.extended) {
                return {...state, users: [...state.users, ...action.users]};
            }
            return {...state, users: [...action.users]};
        }
        case "samurai-network/users/SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "samurai-network/users/SET_TOTAL_USER_COUNT": {
            return {...state, totalUserCount: action.totalUsersCount}
        }
        case "samurai-network/users/SET_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "samurai-network/users/TOGGLE_FOLLOWING_USER": {
            if(action.isFollowing) {
                return {...state, followingInProgress: [...state.followingInProgress, action.userId]}
            }
            return {...state, followingInProgress: state.followingInProgress.filter(u => u !== action.userId)}
        }
        default:
            return state;
    }
}

export default usersReducer;

