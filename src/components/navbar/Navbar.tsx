import React from 'react';
import s from './Navbar.module.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>

            <nav className={s.nav}>
                <ul className={s.navList}>
                    <li className={s.item}>
                        {/*<a className={s.link} href={'/profile'}>Profile</a>*/}
                        <NavLink className={s.link} to={'/profile'}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <Link className={s.link} to={'/dialogs'}>Message</Link>
                        {/*<a className={`${s.link} ${s.active}`} href={'/dialogs'}>Message</a>*/}
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
            <Outlet/>
        </>
    );
};
