import React from 'react';
import { Post } from "./post/Post";
import uuid from "react-uuid";

export type PostsProps = {
    id: string;
    img: string;
    text: string;
    likes: number;
}

const posts: PostsProps[] = [
    {
        id: uuid(),
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg',
        text: 'Some smart thoughts',
        likes: 12,
    },
    {
        id: uuid(),
        img: 'https://i.playground.ru/p/yqb0VvET26QbSdzN4CbtkQ.jpeg',
        text: 'Some smart thoughts',
        likes: 1,
    },
    {
        id: uuid(),
        img: 'https://s10.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/04/Dean-Winchester-5-22-Swan-Song-dean-winchester-12125430-2000-1333-1024x682.jpg',
        text: 'Some smart thoughts',
        likes: 45,
    },
    {
        id: uuid(),
        img: 'https://media.tatler.ru/photos/6197e27bae12fbf5007d6bb1/master/w_1600%2Cc_limit/61aa05e776c92c7096a2c01653ad7f4a.jpg',
        text: 'Some smart thoughts',
        likes: 234,
    },
    {
        id: uuid(),
        img: 'https://www.mentoday.ru/upload/img_cache/759/7598e1612953fc84db99b021bb73789a_ce_1080x720x0x18_cropped_666x444.jpg',
        text: 'Some smart thoughts',
        likes: 972,
    },
];

export const MyPosts: React.FC = () => {
    return (
        <div>
            <textarea></textarea>
            <button onClick={() => {
            }}>Add post
            </button>
            <ul>
                {posts.map((post: PostsProps) => (<Post key={post.id} src={post.img} text={post.text} likes={post.likes} />))}
            </ul>
        </div>

    );
};

