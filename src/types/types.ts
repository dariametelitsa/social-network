import { UserType } from "../api/usersAPI";


export type DialogsPageType = {
    'dialogs': DialogType[]
    'messages': MessageType[]
    newMessageText: string
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

type DialogType = {
    id: string
    name: string
};

type MessageType = {
    id: string
    message: string
};