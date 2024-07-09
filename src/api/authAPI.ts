import axios, { AxiosResponse } from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1c0d9a02-17ae-40c8-8a16-b7733f0e908d',
    },
});

export const authAPI = {
    me(){
        return instance.get<AuthResponseType<AuthResponseDataType>, AxiosResponse<AuthResponseType<AuthResponseDataType>>>('auth/me');
    }
}

type AuthResponseType<T> = {
    data: T
    messages: Array<string>
    fieldsErrors: Array<unknown>
    resultCode: number
}

export type AuthResponseDataType = {
    id: number
    login: string
    email: string
}