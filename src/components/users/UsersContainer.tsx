// @flow
import { Users } from "./Users";
import { connect } from "react-redux";
import { usersPageType } from "../../redux/store";
import { DispatchActionTypes, StateType } from "../../redux/reduxStore";
import { Dispatch } from "redux";
import { followAC, unfollowAC } from "../../redux/usersReducer";

type mapStateToPropsType = {
    users: usersPageType
}
type mapStateToDispatchType = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}
export const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.users
    }
}
export const mapStateToDispatch = (dispatch: Dispatch<DispatchActionTypes>) => {
    return {
        followUser: (userId: string) => dispatch(followAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowAC(userId)),
    }
}

export const UsersContainer = connect()(Users);