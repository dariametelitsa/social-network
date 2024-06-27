import { usersPageType, userType } from "./store";
import { v1 } from "uuid";

export const followAC = (userId: string) => ({type: 'FOLLOW', userId}) as const;
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsersAC = (users: userType[]) => ({type: 'SET_USERS', users}) as const;

type followAType = ReturnType<typeof followAC>
type unfollowAType = ReturnType<typeof unfollowAC>
type setUsersAType = ReturnType<typeof setUsersAC>
export type userActionType =
    followAType
    | unfollowAType
    | setUsersAType

const initialState: usersPageType = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: 'Machiavelli',
            status: 'Hi there',
            location: {
                city: 'New-York',
                country: 'USA',
            }
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Pablo Picasso',
            status: "I'm a great painter!",
            location: {
                city: 'Barcelona',
                country: 'Spain',
            }
        },
    ],
};

const usersReducer = (state: usersPageType = initialState, action: userActionType): usersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return  {...state, users: state.users.map(u => {
                return u.id === action.userId ? {...u, followed: true} : u})}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u})}
        }
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export default usersReducer;

