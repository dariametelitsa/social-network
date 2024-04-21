import React from 'react';
import s from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.item}>
                    <a className={s.link} href={'/profile'}>Profile</a>
                </li>
                <li className={s.item}>
                    <a className={`${s.link} ${s.active}`} href={'/dialogs'}>Message</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href={'#1'}>News</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href={'#1'}>Music</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href={'#1'}>Settings</a>
                </li>
            </ul>
        </nav>
    );
};
