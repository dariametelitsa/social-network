import React from 'react';
import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className={s.nav}>
                <ul className={s.navList}>
                    <li className={s.item}>
                        <NavLink className={({isActive}) => isActive ? s.active : undefined}
                                 to={'/profile'}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={({isActive}) => isActive ? s.active : undefined}
                                 to={'/dialogs'}>Message</NavLink>
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
                </ul>
            </nav>
            <hr/>
        </>
    );
};
