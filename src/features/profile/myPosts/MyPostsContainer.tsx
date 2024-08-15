import { addPost } from "redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { StateType } from "redux/store";
import { connect } from "react-redux";
import { postsProps } from "redux/store-example";
import { Dispatch } from "redux";

type mapStateToPropsType = {
    posts: postsProps[]
};

type mapDispatchToPropsType = {
    addPost: (newPost: string) => void
};

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {dispatch(addPost(newPost));},
    };
};

// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

