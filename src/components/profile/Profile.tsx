import React from 'react';
import s from './Profile.module.scss';
import { MyPosts } from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <img className={s.bgImage} height={'200'} src={'https://www.kino-teatr.ru/news/30463/272783.jpg'} alt={'Background image.'}/>
            <div>avatar + descr</div>
            <MyPosts/>
        </div>
    );
};
