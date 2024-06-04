import React from 'react';
import { Post } from "./post/Post";
import { DispatchActionTypes, postsProps } from "../../../redux/store";
import { AddPostAction, ChangeNewTextAction } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { StoreType } from "../../../redux/reduxStore";

type MyPostsProps = {
    store: any //StoreType
    //dispatch: (action: DispatchActionTypes) => void
}

export const MyPostsContainer = ({store}: MyPostsProps) => {
    const state: StoreType = store.getState();

    const addPostHandler = () => {
        //dispatch(AddPostAction());
        store.dispatch(AddPostAction());
    }

    const onPostChange = (newText: string) => {
        store.dispatch(ChangeNewTextAction(newText));
    }
    return (
        <MyPosts posts={state.profilePage.posts} newPostChange={state.profilePage.newPostText} addPost={addPostHandler} changeNewText={onPostChange}/>
    );
};

