import React from 'react';
import { AddPostAction, ChangeNewTextAction } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { StateType, StoreType } from "../../../redux/reduxStore";
import MyContext from "../../../StoreContext";

// type MyPostsProps = {
//     store: StoreType
// }

export const MyPostsContainer = () => {
    // const state: StateType = store.getState();
    //
    // const addPostHandler = () => {
    //     store.dispatch(AddPostAction());
    // }
    //
    // const onPostChange = (newText: string) => {
    //     store.dispatch(ChangeNewTextAction(newText));
    // }
    return (
        <MyContext.Consumer>
            {
                (store) => {
                    const state: StateType = store.getState();

                    const addPostHandler = () => {
                        store.dispatch(AddPostAction());
                    }

                    const onPostChange = (newText: string) => {
                        store.dispatch(ChangeNewTextAction(newText));
                    }

                    return (<MyPosts posts={state.profilePage.posts} newPostChange={state.profilePage.newPostText}
                                     addPost={addPostHandler} changeNewText={onPostChange}/>
                    )
                }}
        </MyContext.Consumer>
    );
};

