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
    setUsers: (users: UserType[], extended?: boolean) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (total: number) => void
}
export type UserPropsType = mapStateToPropsType & mapStateToDispatchType

type UsersAPIComponentState = {
    photo: string
    pagesCount: number
    extendedPage: number
}

class UsersContainer extends React.Component<UserPropsType, UsersAPIComponentState> {
    private readonly property: string;

    constructor(props: UserPropsType) {
        super(props);
        this.state = {
            photo: 'https://i.ebayimg.com/images/g/hywAAOSwxflZwEwe/s-l1200.webp',
            pagesCount: Math.ceil(this.props.totalUserCount/this.props.pageSize) || 1,
            extendedPage: this.props.currentPage,
        }
        this.property = "It's private";
    }

    componentDidUpdate(prevProps: Readonly<UserPropsType>, prevState: Readonly<UsersAPIComponentState>, snapshot?: any) {
        if (prevProps.totalUserCount !== this.props.totalUserCount) {
            this.setState({
                pagesCount: Math.ceil(this.props.totalUserCount/this.props.pageSize) || 1})
        }
    }

    componentDidMount() {
        userApi.getUsers(this.props.currentPage, 10)
            .then(res => {
                this.props.setUsers(res.items);
                this.props.setTotalUserCount(res.totalCount);
            })
            .catch(() => {
                this.props.setUsers([])
            })
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber);
        this.setState({extendedPage: pageNumber})
        userApi.getUsers(pageNumber, this.props.pageSize)
            .then(res =>
                this.props.setUsers(res.items))
            .catch(() => {
                this.props.setUsers([])
            })
    }

    onLoadMoreUsers(){
        const newPage = this.state.extendedPage + 1 <= this.state.pagesCount ? this.state.extendedPage + 1 : this.state.pagesCount
        this.setState({extendedPage: newPage});
        userApi.getUsers(newPage, this.props.pageSize)
            .then(res =>
                this.props.setUsers(res.items, true))
            .catch(() => {
                this.props.setUsers([])
            })
    }

    render() {
        const {users, currentPage, unfollowUser, followUser} = this.props;

        return (
            <Users
                users={users}
                pagesCount={this.state.pagesCount}
                currentPage={currentPage}
                onPageChangedHandler={this.onPageChanged.bind(this)}
                onLoadMoreUsers={this.onLoadMoreUsers.bind(this)}
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
        setUsers: (users: UserType[], extended?: boolean) => dispatch(setUsersAC(users, extended)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUserCount: (total: number) => dispatch(setTotalUsersCountAC(total)),
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(UsersContainer);