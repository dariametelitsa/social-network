import { PATH } from "../common/routes/PATHS";
import { GetUserProfileResponseType } from "./usersAPI";
import { instance } from "./authAPI";


export const profileAPI = {
    getUserProfile: (userId: number) => {
        return instance.get<GetUserProfileResponseType>(`${PATH.PROFILE}/${userId}`)
            .then(res => {
                return res.data
            })
    },
    getUserStatus(userId: number){
        return instance.get<string>(`/profile/status/${userId}`);
    },
    updateUserStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status`, {status})
    }
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
};