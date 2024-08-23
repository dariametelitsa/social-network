import { postsProps, ProfilePageType } from "./store-example";
import uuid from "react-uuid";
import avatar from "./avatar5.jpeg";
import { GetUserProfileResponseType } from "api/usersAPI";

//actions
export const addPost = (newPost: string) => ({type: 'ADD_POST', newPost} as const);
export const deletePost = (id: string) => ({type: 'DELETE_POST', id} as const);
export const setUserProfile = (profile: GetUserProfileResponseType) => ({type: 'SET_USER_PROFILE', profile} as const);
export const setUserStatus = (status: string) => ({type: 'SET_USER_STATUS', status} as const);

export type ProfileActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>

const initialState: ProfilePageType = {
    posts: [
        {
            id: uuid(),
            img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg',
            text: 'Some smart thoughts',
            likes: 12,
        },
        {
            id: uuid(),
            img: 'https://i.playground.ru/p/yqb0VvET26QbSdzN4CbtkQ.jpeg',
            text: 'Some smart thoughts',
            likes: 1,
        },
        {
            id: uuid(),
            img: 'https://s10.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/04/Dean-Winchester-5-22-Swan-Song-dean-winchester-12125430-2000-1333-1024x682.jpg',
            text: 'Some smart thoughts',
            likes: 45,
        },
        {
            id: uuid(),
            img: 'https://media.tatler.ru/photos/6197e27bae12fbf5007d6bb1/master/w_1600%2Cc_limit/61aa05e776c92c7096a2c01653ad7f4a.jpg',
            text: 'Some smart thoughts',
            likes: 234,
        },
        {
            id: uuid(),
            img: 'https://www.mentoday.ru/upload/img_cache/759/7598e1612953fc84db99b021bb73789a_ce_1080x720x0x18_cropped_666x444.jpg',
            text: 'Some smart thoughts',
            likes: 972,
        },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost: postsProps = {
                id: uuid(),
                img: avatar,
                text: action.newPost,
                likes: 0,
            };
            return {...state, posts: [...state.posts, newPost]};
        case "SET_USER_PROFILE": {
            return {...state, profile: action.profile};
        }
        case "SET_USER_STATUS": {
            return {...state, status: action.status};
        }
        case "DELETE_POST": {
            return {...state, posts: state.posts.filter((post) => post.id !== action.id)}
        }
        default:
            return state;
    }
};

export default profileReducer;