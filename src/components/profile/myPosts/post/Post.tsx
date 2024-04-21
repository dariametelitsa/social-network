import React from 'react';
import s from './Post.module.scss';

type PostProps = {
    src: string;
    text: string;
    likes: number;
}

export const Post: React.FC<PostProps> = (props) => {

    return (
        <li className={s.post}>
            <img className={s.avatar} src={props.src} alt={'Avatar.'}/>
            <p>{props.text}</p>
            <div><span>Likes </span> {props.likes}</div>
        </li>
    );
};
