import React from 'react';
import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { myFriendsType } from "../../redux/store-example";
import { PATH } from "../../routes/PATHS";

export const Navbar = ({friends}: {friends: myFriendsType[]}) => {
    return (
        <>
            <nav className={s.nav}>
                <ul className={s.navList}>
                    <li className={s.item}>
                        <NavLink className={({isActive}) => isActive ? s.active : undefined}
                                 to={PATH.PROFILE}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={({isActive}) => isActive ? s.active : undefined}
                                 to={PATH.DIALOGS}>Message</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} to={'#1'}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} to={'#1'}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} to={'#1'}>Settings</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} to={PATH.USERS}>Users</NavLink>
                    </li>
                </ul>

                <hr/>
                <ul className={s.friendsList}>
                    {friends.map((friend: myFriendsType, index) => {
                        return (<li className={s.friendItem} key={index}>
                            <img src={friend.img} className={s.avatar} alt={`Photo of ${friend.name}`} />
                            <p>{friend.name}</p>
                        </li>)
                    })}
                </ul>
            </nav>
            <hr/>
        </>
    );
};
