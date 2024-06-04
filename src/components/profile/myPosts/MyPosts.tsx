import React, { ChangeEvent, RefObject } from 'react';
import { Post } from "./post/Post";
import s from './MyPosts.module.scss';
import { DispatchActionTypes, postsProps } from "../../../redux/store";
import { AddPostAction, ChangeNewTextAction } from "../../../redux/profileReducer";

type MyPostsProps = {
    posts: postsProps[]
    newPostChange: string
    dispatch: (action: DispatchActionTypes) => void
}

export const MyPosts = ({posts, dispatch, newPostChange}: MyPostsProps) => {
    const postElements = posts.map((post: postsProps) => (
        <Post key={post.id} src={post.img} text={post.text} likes={post.likes}/>));

    const newPostEl: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        const newPost = newPostEl.current?.value;
        if(newPost) {
            dispatch(AddPostAction());
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(ChangeNewTextAction(e.currentTarget.value));
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

