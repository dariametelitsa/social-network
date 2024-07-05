import React from 'react';
import s from './Header.module.scss';
import { NavLink } from "react-router-dom";
import { PATH } from "../../routes/PATHS";

type HeaderProps = {
    isAuth: boolean
}
export const Header: React.FC<HeaderProps> = ({isAuth}) => {
    return (
        <header className={s.header}>
            <img height={'50'}
                 src={'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1712247807~exp=1712248407~hmac=a45f8e78ac09f0bdeeea333f1d5691da05eef570d558e4ded52cc142208eba55'}
                 alt={'Logotype'}/>
            <div className={s.loginBlock}>
                <NavLink to={PATH.LOGIN}
                         className={({isActive}) => isActive ? s.active + ' ' + s.loginLink : s.loginLink}>
                    {isAuth ? 'Logout' : 'Login'}
                </NavLink>
            </div>
        </header>
    );
};
