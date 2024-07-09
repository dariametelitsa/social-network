import { PATH } from "../routes/PATHS";
import { GetUserProfileResponseType } from "./usersAPI";
import { instance } from "./authAPI";


export const profileAPI = {
    getUserProfile: (userId: number) => {
        return instance.get<GetUserProfileResponseType>(`${PATH.PROFILE}/${userId}`)
            .then(res => {
                return res.data
            })
    },

}