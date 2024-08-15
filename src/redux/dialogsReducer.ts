import { dialogsPageType, messageType } from "./store-example";
import uuid from "react-uuid";
import { DialogsPageType } from "../types/types";

//actions
export const AddMessageAction = (newMessage: string) => ({type: 'ADD_MESSAGE', newMessage} as const);

type AddMessageActionType = ReturnType<typeof AddMessageAction>
export type DialogActionType =
    | AddMessageActionType

const initialState: DialogsPageType = {
    dialogs: [
        {id: '1', name: 'Tom'},
        {id: '2', name: 'Steve'},
        {id: '3', name: 'Veronica'},
        {id: '4', name: 'Nataniel'},
        {id: '5', name: 'Mike'},
        {id: '6', name: 'Aurora'},
    ],
    messages: [
        {id: '1', message: 'Hello World 1!'},
        {id: '2', message: 'Hello World! 2'},
        {id: '3', message: 'Hello World! 3'},
        {id: '4', message: 'Hello World! 4'},
        {id: '5', message: 'Hello World! 5'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state: dialogsPageType = initialState, action: DialogActionType): dialogsPageType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            const newMessage: messageType = {
                id: uuid(),
                message: action.newMessage,
            };
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''};
        default:
            return state;
    }
};

export default dialogsReducer;