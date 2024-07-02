// @flow
import { Users } from "./Users";
import { connect } from "react-redux";
import { usersPageType } from "../../redux/store-example";
import { DispatchActionTypes, StateType } from "../../redux/store";
import { Dispatch } from "redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import { UserType } from "../../api/usersAPI";

type mapStateToPropsType = {
    users: usersPageType
}
type mapStateToDispatchType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
export type UserPropsType = mapStateToPropsType & mapStateToDispatchType


export const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.users
    }
}
export const mapStateToDispatch = (dispatch: Dispatch<DispatchActionTypes>): mapStateToDispatchType => {
    return {
        followUser: (userId: number) => dispatch(followAC(userId)),
        unfollowUser: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users);