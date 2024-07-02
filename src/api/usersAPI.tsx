import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1c0d9a02-17ae-40c8-8a16-b7733f0e908d'
    }
})

export const userApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    }
}

export type UserType = {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
},
    status: string| null
    followed: boolean
}
type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}