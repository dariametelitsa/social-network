// @flow
import { AddMessageAction } from "redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { DispatchActionTypes, StateType } from "redux/store";
import { connect } from "react-redux";
import { dialogsPageType } from "redux/store-example";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "components/HOC/withAuthRedirect";
import React from "react";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchActionTypes>): mapDispatchToPropsType => {
    return {
        addMessage: (newMessage: string) => dispatch(AddMessageAction(newMessage)),
    }
};

//export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)
