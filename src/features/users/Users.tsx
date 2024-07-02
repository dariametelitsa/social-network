import React from "react";
import s from './Users.module.scss';
import { userApi } from "../../api/usersAPI";
import { UserPropsType } from "./UsersContainer";
import { Pagination } from "../../components/pagination/Pagination";

type UsersState = {
    photo: string
}

export class Users extends React.Component<UserPropsType, UsersState> {
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

    render() {
        const {users, pageSize, totalUserCount, currentPage, setCurrentPage, unfollowUser, followUser} = this.props;

        const onPageChangedHandler = (pageNumber: number) => {
            setCurrentPage(pageNumber);
            userApi.getUsers(pageNumber, pageSize)
                .then(res =>
                    this.props.setUsers(res.items))
                .catch(() => {
                    this.props.setUsers([])
                })
        }
        let pagesCount = Math.ceil(totalUserCount/pageSize);
        return (
            <div>
                <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageClick={onPageChangedHandler}/>
                {
                    users.map(u => {
                        return (
                            <div key={u.id} className={s.containerUser}>
                                <div className={s.blocksPosition}>
                                    <img className={s.avatar} src={u.photos.small || this.state.photo}
                                         alt={'User avatar'}/>
                                    {u.followed
                                        ? <button className={s.button} onClick={() => {
                                            unfollowUser(u.id)
                                        }}>Follow</button>
                                        : <button className={s.button} onClick={() => {
                                            followUser(u.id)
                                        }}>Unfollow</button>
                                    }
                                </div>
                                <div className={s.blocksPosition}>
                                    <b>{u.name}</b>
                                    <span>{u.status}</span>
                                </div>
                                <div className={s.blocksPosition}>
                                    <span>Country</span>
                                    <span>City</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>)
    }
}
