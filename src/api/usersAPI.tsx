import { instance } from "./authAPI";

export const userApi = {
    getUsers: async (currentPage: number, pageSize: number) => {
        try {
            const res = await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`);
            return res.data;
            } catch (e: any) {
                return e.message;
            }
    },

    subscribe: (userId: number) => {
        return instance.post<BaseResponse>(`follow/${userId}`);
    },
    unsubscribe: (userId: number) => {
        return instance.delete<BaseResponse>(`follow/${userId}`);
    }
}

type BaseResponse <T = {}> = {
    resultCode: number
    messages: string[]
    data: T
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

export type SocialMediaType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: string | null
    large: string | null
}