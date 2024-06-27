// @flow
import { Users } from "./Users";
import { connect } from "react-redux";
import { usersPageType, userType } from "../../redux/store";
import { DispatchActionTypes, StateType } from "../../redux/reduxStore";
import { Dispatch } from "redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

type mapStateToPropsType = {
    users: usersPageType
}
type mapStateToDispatchType = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: (users: userType[]) => void
}
export type UserPropsType = mapStateToPropsType & mapStateToDispatchType


export const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.users
    }
}
export const mapStateToDispatch = (dispatch: Dispatch<DispatchActionTypes>): mapStateToDispatchType => {
    return {
        followUser: (userId: string) => dispatch(followAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowAC(userId)),
        setUsers: (users: userType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users);