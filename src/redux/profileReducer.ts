import { DispatchActionTypes, messageType, postsProps, profilePageType, stateType } from "./state";
import uuid from "react-uuid";
import avatar from "./avatar5.jpeg";

//actions
export const AddPostAction = () => ({type: 'ADD_POST'} as const);
export const ChangeNewTextAction = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText
} as const);

const profileReducer = (state: profilePageType, action: DispatchActionTypes): profilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost: postsProps = {
                id: uuid(),
                img: avatar,
                text: state.newPostText,
                likes: 0,
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case 'UPDATE_NEW_POST_TEXT':
            return {...state, newPostText: action.newText};
        default:
            return state;
    }
};

export default profileReducer;