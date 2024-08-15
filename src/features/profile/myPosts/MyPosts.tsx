import React from 'react';
import { Post } from "./post/Post";
import s from './MyPosts.module.scss';
import { postsProps } from "redux/store-example";
import { MyPostsPropsType } from "./MyPostsContainer";
import { NewPostReduxForm } from "features/profile/myPosts/newPostForm/NewPostForm";


export const MyPosts = ({posts, addPost}: MyPostsPropsType) => {
    const postElements = posts.map((post: postsProps) => (
        <Post key={post.id} src={post.img} text={post.text} likes={post.likes}/>));

    //const newPostEl: RefObject<HTMLTextAreaElement> = React.createRef();
    // const addPostHandler = () => {
    //     const newPost = newPostEl.current?.value;
    //     if(newPost) {
    //         addPost();
    //     }
    // }
    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     changeNewText(e.currentTarget.value);
    // }

    const onSubmit = (formData: MyPostsFormType) => {
        console.log(formData)
            if(formData) {
                addPost(formData.newPost);
            }
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <NewPostReduxForm onSubmit={onSubmit} />
            <ul>
                {postElements}
            </ul>
        </div>

    );
};

export type MyPostsFormType = {
    newPost: string
}
