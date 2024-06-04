import { dialogsPageType, DispatchActionTypes, messageType, postsProps, stateType } from "./state";
import uuid from "react-uuid";

//actions
export const AddMessageAction = () => ({type: 'ADD_MESSAGE'} as const);
export const ChangeNewMessageAction = (newText: string) => ({
    type: 'UPDATE_NEW_MESSAGE',
    newText
} as const);

const dialogsReducer = (state: dialogsPageType, action: DispatchActionTypes): dialogsPageType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            const newMessage: messageType = {
                id: uuid(),
                message: state.newMessageText,
            };
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''};
        case 'UPDATE_NEW_MESSAGE':
            return {...state, newMessageText: action.newText};
        default:
            return state;
    }
};

export default dialogsReducer;