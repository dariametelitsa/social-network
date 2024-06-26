// @flow
import { AddMessageAction, ChangeNewMessageAction } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { StateType } from "../../redux/reduxStore";
import { connect } from "react-redux";
import { dialogsPageType } from "../../redux/store";
import { Dispatch } from "redux";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: () => void
    changeNewMessage: (newText: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(AddMessageAction()),
        changeNewMessage: (newText: string) => {dispatch(ChangeNewMessageAction(newText))}
    }
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);