// @flow
import { AddMessageAction, ChangeNewMessageAction } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { DispatchActionTypes, StateType } from "../../redux/store";
import { connect } from "react-redux";
import { dialogsPageType } from "../../redux/store-example";
import { compose, Dispatch } from "redux";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    addMessage: () => void
    changeNewMessage: (newText: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<DispatchActionTypes>): mapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(AddMessageAction()),
        changeNewMessage: (newText: string) => {dispatch(ChangeNewMessageAction(newText))}
    }
};

//export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)