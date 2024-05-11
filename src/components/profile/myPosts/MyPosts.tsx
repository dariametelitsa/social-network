import React from 'react';
import { Post } from "./post/Post";
import s from './MyPosts.module.scss';
import { postsProps } from "../../../redux/state";

type MyPostsProps = {
    posts: postsProps[]
}

export const MyPosts = ({posts}: MyPostsProps) => {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <textarea></textarea>
            <button onClick={() => {
            }} className={s.addPostButton}>Add post
            </button>
            <ul>
                {posts.map((post: postsProps) => (
                    <Post key={post.id} src={post.img} text={post.text} likes={post.likes}/>))}
            </ul>
        </div>

    );
};

