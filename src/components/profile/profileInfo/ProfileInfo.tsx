// @flow
import * as React from 'react';
import s from "./ProfileInfo.module.scss";

type Props = {};
export const ProfileInfo = (props: Props) => {
    return (
        <div>
            <img className={s.bgImage} height={'200'} src={'https://www.kino-teatr.ru/news/30463/272783.jpg'}
                 alt={'Background image.'}/>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};