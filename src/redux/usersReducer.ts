import { UserType } from "../api/usersAPI";
import { UsersPageType } from "../common/types/types";

export const followUser = (userId: number) => ({type: 'FOLLOW_USER', userId}) as const;
export const unfollowUser = (userId: number) => ({type: 'UNFOLLOW_USER', userId}) as const;
export const setUsers = (users: UserType[], extended: boolean = false) => ({type: 'SET_USERS', users, extended}) as const;
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const;
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET_TOTAL_USER_COUNT', totalUsersCount}) as const;
export const setIsFetching = (isFetching: boolean) => ({type: 'SET_IS_FETCHING', isFetching}) as const;
export const toggleFollowingUser = (userId: number, isFollowing: boolean) => ({type: 'TOGGLE_FOLLOWING_USER', userId, isFollowing}) as const;

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
        case 'FOLLOW_USER': {
            return {
                ...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        }
        case "UNFOLLOW_USER": {
            return {
                ...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        }
        case "SET_USERS": {
            if(action.extended) {
                return {...state, users: [...state.users, ...action.users]};
            }
            return {...state, users: [...action.users]};
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USER_COUNT": {
            return {...state, totalUserCount: action.totalUsersCount}
        }
        case "SET_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_FOLLOWING_USER": {
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

