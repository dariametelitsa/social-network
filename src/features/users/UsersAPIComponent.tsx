import React from "react";
import { userApi } from "../../api/usersAPI";
import { UserPropsType } from "./UsersContainer";
import { Users } from "./Users";

type UsersAPIComponentState = {
    photo: string
}

export class UsersAPIComponent extends React.Component<UserPropsType, UsersAPIComponentState> {
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
