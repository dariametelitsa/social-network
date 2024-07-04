// @flow
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import {
    followUser,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollowUser
} from "../../redux/usersReducer";
import { userApi, UserType } from "../../api/usersAPI";
import React from "react";
import { Users } from "./Users";
import Preloader from "../../components/preloader/Preloader";


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
type mapStateToDispatchType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[], extended?: boolean) => void
    setCurrentPage: (pageNumber: number) => void
    setIsFetching: (isFetching: boolean) => void
    setTotalUsersCount: (total: number) => void
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
            pagesCount: Math.ceil(this.props.totalUserCount / this.props.pageSize) || 1,
            extendedPage: this.props.currentPage,
        }
        this.property = "It's private";
    }

    componentDidUpdate(prevProps: Readonly<UserPropsType>, prevState: Readonly<UsersAPIComponentState>, snapshot?: any) {
        if (prevProps.totalUserCount !== this.props.totalUserCount) {
            this.setState({
                pagesCount: Math.ceil(this.props.totalUserCount / this.props.pageSize) || 1
            })
        }
    }

    componentDidMount() {
        this.props.setIsFetching(true)
        userApi.getUsers(this.props.currentPage, 10)
            .then(res => {
                this.props.setUsers(res.items);
                this.props.setTotalUsersCount(res.totalCount);
            })
            .catch(() => {
                this.props.setUsers([])
            })
            .finally(() => {
                this.props.setIsFetching(false)
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

    onLoadMoreUsers() {
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
        const {users, currentPage, unfollowUser, followUser, isFetching} = this.props;

        return (
            <>
                {isFetching && <Preloader/>}
                <Users
                    users={users}
                    pagesCount={this.state.pagesCount}
                    currentPage={currentPage}
                    onPageChangedHandler={this.onPageChanged.bind(this)}
                    onLoadMoreUsers={this.onLoadMoreUsers.bind(this)}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                />
            </>
        )
    }
}

export const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// export const mapStateToDispatch = (dispatch: Dispatch<DispatchActionTypes>): mapStateToDispatchType => {
//     return {
//         followUser: (userId) => dispatch(followAC(userId)),
//         unfollowUser: (userId) => dispatch(unfollowAC(userId)),
//         setUsers: (users, extended?) => dispatch(setUsersAC(users, extended)),
//         setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//         setTotalUserCount: (total) => dispatch(setTotalUsersCountAC(total)),
//         setIsFetching: (isFetching) => dispatch(setIsFetching(isFetching)),
//     }
// }
//

//mapDispatchToProps может принимать объект с ACS
export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
})(UsersContainer);