import { connect } from "react-redux";
import { StateType } from "redux/store";
import { setCurrentPage } from "redux/usersReducer";
import { UserType } from "api/usersAPI";
import React from "react";
import { Users } from "./Users";
import Preloader from "../../components/common/preloader/Preloader";
import { followUserTC, fetchUsers, unfollowUserTC } from "redux/thunks/usersThunk";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching, getPageSize,
    getTotalUserCount,
    getUsers, getUsersWithPhoto
} from "redux/selectors/userSelectors";

type mapStateToPropsType = {
    users: UserType[]
    filteredUsers: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapStateToDispatchType = {
    fetchUsers: (currentPage: number, pageSize: number, extended?: boolean) => void
    followUserTC: (userId: number) => void
    unfollowUserTC: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
}
export type UserPropsType = mapStateToPropsType & mapStateToDispatchType

type UsersAPIComponentState = {
    photo: string
    pagesCount: number
    extendedPage: number
    isFiltered: boolean
}

class UsersContainer extends React.Component<UserPropsType, UsersAPIComponentState> {
    //private readonly property: string;

    constructor(props: UserPropsType) {
        super(props);
        this.state = {
            photo: 'https://i.ebayimg.com/images/g/hywAAOSwxflZwEwe/s-l1200.webp',
            pagesCount: Math.ceil(this.props.totalUserCount / this.props.pageSize) || 1,
            extendedPage: this.props.currentPage,
            isFiltered: false,
        }
        //this.property = "It's private";
    }

    componentDidUpdate(prevProps: Readonly<UserPropsType>, prevState: Readonly<UsersAPIComponentState>, snapshot?: any) {
        const {totalUserCount, pageSize} = this.props;
        if (prevProps.totalUserCount !== totalUserCount) {
            this.setState({
                pagesCount: Math.ceil(totalUserCount / pageSize) || 1
            })
        }
    }

    componentDidMount() {
        this.props.fetchUsers(this.props.currentPage, this.props.pageSize);
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
    }

    onPageChanged(pageNumber: number) {
        this.props.fetchUsers(pageNumber, this.props.pageSize)
        this.setState({extendedPage: pageNumber})
    }

    onLoadMoreUsers() {
        const newPage = this.state.extendedPage + 1 <= this.state.pagesCount ? this.state.extendedPage + 1 : this.state.pagesCount
        this.setState({extendedPage: newPage});
        this.props.fetchUsers(newPage, this.props.pageSize, true);

    }

    isFilterUsers(isFiltered: boolean) {
        this.setState({isFiltered: isFiltered});
    }

    render() {
        const {users, filteredUsers, currentPage, unfollowUserTC, followUserTC, isFetching, followingInProgress} = this.props;
        const passUser = this.state.isFiltered ? filteredUsers : users;

        return (
            <>
                {isFetching && <Preloader/>}
                <Users
                    users={passUser}
                    isFiltered={this.state.isFiltered}
                    isFilterUsers={this.isFilterUsers.bind(this)}
                    pagesCount={this.state.pagesCount}
                    currentPage={currentPage}
                    onPageChangedHandler={this.onPageChanged.bind(this)}
                    onLoadMoreUsers={this.onLoadMoreUsers.bind(this)}
                    unfollowUser={unfollowUserTC}
                    followUser={followUserTC}
                    followingInProgress={followingInProgress}
                />
            </>
        )
    }
}

export const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        filteredUsers: getUsersWithPhoto(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

//mapDispatchToProps может принимать объект с AC / thunk
export default connect(mapStateToProps, {
    followUserTC,
    unfollowUserTC,
    fetchUsers,
    setCurrentPage,
})(UsersContainer);
