// @flow
import * as React from 'react';
import { AddMessageAction, ChangeNewMessageAction } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

type DialogsProps = {
    // dialogsPage: {
    //     dialogs: dialogType[]
    //     messages: messageType[]
    //     newMessageText: string
    // },
    // dispatch: (action: DispatchActionTypes) => void
    store: any //StoreType
}

export const DialogsContainer = ({store}: DialogsProps) => {

    const addNewMessage = () => {
        store.dispatch(AddMessageAction());
    }

    const onChangeHandler = (newText: string) => {
        store.dispatch(ChangeNewMessageAction(newText));
        store.dispatch(ChangeNewMessageAction)
    }

    return (
        <Dialogs dialogsPage={store.getState().dialogsPage} addMessage={addNewMessage} changeNewMessage={onChangeHandler} />
    );
};