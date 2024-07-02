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
import { userApi, UserType } from "../../api/usersAPI";
import React from "react";
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

type UsersAPIComponentState = {
    photo: string
}

class UsersContainer extends React.Component<UserPropsType, UsersAPIComponentState> {
    private readonly property: string;

    constructor(props: UserPropsType) {
        super(props);
        this.state = {
            photo: 'https://i.ebayimg.com/images/g/hywAAOSwxflZwEwe/s-l1200.webp'
        }
        this.property = "It's private";
    }

    componentDidMount() {
        userApi.getUsers(1, 10)
            .then(res => {
                this.props.setUsers(res.items);
                this.props.setTotalUserCount(res.totalCount);
            })
            .catch(() => {
                this.props.setUsers([])
            })
    }
    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber);
        userApi.getUsers(pageNumber, this.props.pageSize)
            .then(res =>
                this.props.setUsers(res.items))
            .catch(() => {
                this.props.setUsers([])
            })
    }

    render() {
        const {users, pageSize, totalUserCount, currentPage, unfollowUser, followUser} = this.props;

        return (
            <Users
                users={users}
                totalUserCount={totalUserCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChangedHandler={this.onPageChanged.bind(this)}
                followUser={followUser}
                unfollowUser={unfollowUser}
            />
        )
    }
}

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

export default connect(mapStateToProps, mapStateToDispatch)(UsersContainer);