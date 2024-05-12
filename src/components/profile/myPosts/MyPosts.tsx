import React, { RefObject } from 'react';
import { Post } from "./post/Post";
import s from './MyPosts.module.scss';
import { postsProps } from "../../../redux/state";

type MyPostsProps = {
    posts: postsProps[]
}

export const MyPosts = ({posts}: MyPostsProps) => {
    const postElements = posts.map((post: postsProps) => (
        <Post key={post.id} src={post.img} text={post.text} likes={post.likes}/>));

    const newPostEl: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        alert(newPostEl.current?.value)
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <textarea ref={newPostEl}></textarea>
            <button onClick={addPost} className={s.addPostButton}>Add post
            </button>
            <ul>
                {postElements}
            </ul>
        </div>

    );
};

