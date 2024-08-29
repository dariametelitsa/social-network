import axios, { AxiosResponse } from "axios";
import { FormDataType } from "features/login/Login";

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
    },
    login(data: FormDataType) {
        return instance.post<AuthResponseType<{userId: number}>, AxiosResponse<AuthResponseType<{userId: number}>>>('auth/login', {...data});
    },
    logout() {
        return instance.delete<AuthResponseType, AxiosResponse<AuthResponseType>>('auth/login');
    }
}

type AuthResponseType<T = {}> = {
    data: T
    messages: Array<string>
    fieldsErrors: Array<unknown>
    resultCode: number
}

export type AuthResponseDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
