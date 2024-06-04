import React, { ChangeEvent, RefObject } from 'react';
import { Post } from "./post/Post";
import s from './MyPosts.module.scss';
import { postsProps } from "../../../redux/store";

type MyPostsProps = {
    posts: postsProps[]
    newPostChange: string
    changeNewText: (newText: string) => void
    addPost: () => void
}

export const MyPosts = ({posts, changeNewText, newPostChange, addPost}: MyPostsProps) => {
    const postElements = posts.map((post: postsProps) => (
        <Post key={post.id} src={post.img} text={post.text} likes={post.likes}/>));

    const newPostEl: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        const newPost = newPostEl.current?.value;
        if(newPost) {
            addPost();
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewText(e.currentTarget.value);
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

