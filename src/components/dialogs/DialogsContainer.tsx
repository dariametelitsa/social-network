// @flow
import * as React from 'react';
import { AddMessageAction, ChangeNewMessageAction } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { StateType, StoreType } from "../../redux/reduxStore";
import MyContext from "../../StoreContext";

// type DialogsProps = {
//     store: StoreType
// }

export const DialogsContainer = () => {

    // const state: StateType = store.getState();
    //
    // const addNewMessage = () => {
    //     store.dispatch(AddMessageAction());
    // }
    //
    // const onChangeHandler = (newText: string) => {
    //     store.dispatch(ChangeNewMessageAction(newText));
    // }

    return (
        <MyContext.Consumer>
            {(store) => {
                const state: StateType = store.getState();

                const addNewMessage = () => {
                    store.dispatch(AddMessageAction());
                }

                const onChangeHandler = (newText: string) => {
                    store.dispatch(ChangeNewMessageAction(newText));
                }

                return ( <Dialogs dialogsPage={state.dialogsPage} addMessage={addNewMessage} changeNewMessage={onChangeHandler} />);
            }}
        </MyContext.Consumer>

    );
};