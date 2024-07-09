// @flow
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import { setCurrentPage } from "../../redux/usersReducer";
import { UserType } from "../../api/usersAPI";
import React from "react";
import { Users } from "./Users";
import Preloader from "../../components/preloader/Preloader";
import { followUserTC, getUsersTC, unfollowUserTC } from "../../redux/thunks/usersThunk";
import { compose } from "redux";

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapStateToDispatchType = {
    getUsersTC: (currentPage: number, pageSize: number, extended?: boolean) => void
    followUserTC: (userId: number) => void
    unfollowUserTC: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
}
export type UserPropsType = mapStateToPropsType & mapStateToDispatchType

type UsersAPIComponentState = {
    photo: string
    pagesCount: number
    extendedPage: number
}

class UsersContainer extends React.Component<UserPropsType, UsersAPIComponentState> {
    //private readonly property: string;

    constructor(props: UserPropsType) {
        super(props);
        this.state = {
            photo: 'https://i.ebayimg.com/images/g/hywAAOSwxflZwEwe/s-l1200.webp',
            pagesCount: Math.ceil(this.props.totalUserCount / this.props.pageSize) || 1,
            extendedPage: this.props.currentPage,
        }
        //this.property = "It's private";
    }

    componentDidUpdate(prevProps: Readonly<UserPropsType>, prevState: Readonly<UsersAPIComponentState>, snapshot?: any) {
        if (prevProps.totalUserCount !== this.props.totalUserCount) {
            this.setState({
                pagesCount: Math.ceil(this.props.totalUserCount / this.props.pageSize) || 1
            })
        }
    }

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
    }

    onPageChanged(pageNumber: number) {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        this.setState({extendedPage: pageNumber})
    }

    onLoadMoreUsers() {
        const newPage = this.state.extendedPage + 1 <= this.state.pagesCount ? this.state.extendedPage + 1 : this.state.pagesCount
        this.setState({extendedPage: newPage});
        this.props.getUsersTC(newPage, this.props.pageSize, true);

    }

    render() {
        const {users, currentPage, unfollowUserTC, followUserTC, isFetching, followingInProgress} = this.props;

        return (
            <>
                {isFetching && <Preloader/>}
                <Users
                    users={users}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

//mapDispatchToProps может принимать объект с AC / thunk
export default connect(mapStateToProps, {
    followUserTC,
    unfollowUserTC,
    getUsersTC,
    setCurrentPage,
})(UsersContainer);
