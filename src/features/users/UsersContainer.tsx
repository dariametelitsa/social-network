// @flow
import { connect } from "react-redux";
import { DispatchActionTypes, StateType } from "../../redux/store";
import { Dispatch } from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/usersReducer";
import { UserType } from "../../api/usersAPI";
import { Users } from "./Users";


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type mapStateToDispatchType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (total: number) => void
}
export type UserPropsType = mapStateToPropsType & mapStateToDispatchType


export const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}
export const mapStateToDispatch = (dispatch: Dispatch<DispatchActionTypes>): mapStateToDispatchType => {
    return {
        followUser: (userId: number) => dispatch(followAC(userId)),
        unfollowUser: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUserCount: (total: number) => dispatch(setTotalUsersCountAC(total)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users);