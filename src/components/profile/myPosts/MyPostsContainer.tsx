import React from 'react';
import { Post } from "./post/Post";
import { DispatchActionTypes, postsProps } from "../../../redux/store";
import { AddPostAction, ChangeNewTextAction } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { StateType, StoreType } from "../../../redux/reduxStore";

type MyPostsProps = {
    store: StoreType
}

export const MyPostsContainer = ({store}: MyPostsProps) => {
    const state: StateType = store.getState();

    const addPostHandler = () => {
        store.dispatch(AddPostAction());
    }

    const onPostChange = (newText: string) => {
        store.dispatch(ChangeNewTextAction(newText));
    }
    return (
        <MyPosts posts={state.profilePage.posts} newPostChange={state.profilePage.newPostText} addPost={addPostHandler} changeNewText={onPostChange}/>
    );
};

