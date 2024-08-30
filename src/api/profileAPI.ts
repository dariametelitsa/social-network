import { PATH } from "common/routes/PATHS";
import { GetUserProfileResponseType, PhotosType } from "./usersAPI";
import { instance } from "./authAPI";


export const profileAPI = {
    getUserProfile: (userId: number) => {
        return instance.get<GetUserProfileResponseType>(`${PATH.PROFILE}/${userId}`)
            .then(res => {
                return res.data
            })
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`);
    },
    updateUserStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status`, {status})
    },
    saveAvatar(photo: File) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put<ResponseType<{ photos: PhotosType }>>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
};