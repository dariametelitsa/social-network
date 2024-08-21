import { AuthResponseDataType } from "../api/authAPI";

export type AuthState = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}
const initialState: AuthState = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false,
}

export const authReducer = (state = initialState, action: AuthActionsType): AuthState => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload, isFetching: false};
        }
        default: {
            return state;
        }
    }
}

export const setUserData = (payload: AuthResponseDataType) => ({type: "SET_USER_DATA", payload } as const);
export type AuthActionsType =
    | ReturnType<typeof setUserData>