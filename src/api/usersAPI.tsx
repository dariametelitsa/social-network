import axios from "axios";
import { PATH } from "../routes/PATHS";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1c0d9a02-17ae-40c8-8a16-b7733f0e908d'
    }
})

export const userApi = {
    getUsers: async (currentPage: number, pageSize: number) => {
        try {
            const res = await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`);
            return res.data;
            } catch (e: any) {
                return e.message;
            }
        // } catch (e: unknown) {
        //     if (axios.isAxiosError(e)) {
        //         console.log(e.message);
        //         return e.message;
        //     } else {
        //         console.log((e as Error).message);
        //         return (e as Error).message;
        //     }
        // }
    },

    getUserProfile: (userId: number) => {
        return instance.get<GetUserProfileResponseType>(`${PATH.PROFILE}/${userId}`)
            .then(res => {
                return res.data
            })
    },
    subscribe: (userId: number) => {
        return instance.post(`follow/${userId}`);
    },
    unsubscribe: (userId: number) => {
        return instance.delete(`follow/${userId}`);
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

export type GetUserProfileResponseType = {
    aboutMe: string
    contacts: SocialMediaType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type SocialMediaType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type PhotosType = {
    small: string | null
    large: string | null
}