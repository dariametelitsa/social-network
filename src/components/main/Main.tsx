import React from 'react';
import s from './Main.module.scss';
import { MyPosts } from "./myPosts/MyPosts";

export const Main = () => {
    return (
        <main className={s.main}>
            <img className={s.bgImage} height={'200'} src={'https://www.kino-teatr.ru/news/30463/272783.jpg'}/>
            <div>avatar + descr</div>
            <MyPosts/>
        </main>
    );
};
