import React, { ChangeEvent, RefObject } from 'react';
import { Post } from "./post/Post";
import s from './MyPosts.module.scss';
import { postsProps } from "../../../redux/state";

type MyPostsProps = {
    posts: postsProps[]
    addPost: (postMessage: string) => void
    newPostChange: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = ({posts, addPost, newPostChange, updateNewPostText}: MyPostsProps) => {
    const postElements = posts.map((post: postsProps) => (
        <Post key={post.id} src={post.img} text={post.text} likes={post.likes}/>));

    const newPostEl: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        const newPost = newPostEl.current?.value;
        if(newPost) {
            addPost(newPost);
            // updateNewPostText('');
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <textarea ref={newPostEl} value={newPostChange} onChange={onPostChange}/>
            <button onClick={addPostHandler} className={s.addPostButton}>Add post
            </button>
            <ul>
                {postElements}
            </ul>
        </div>

    );
};

