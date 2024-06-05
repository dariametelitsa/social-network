import { AddPostAction, ChangeNewTextAction } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { StateType } from "../../../redux/reduxStore";
import { connect } from "react-redux";
import { postsProps } from "../../../redux/store";
import { Dispatch } from "redux";

type mapStateToPropsType = {
    posts: postsProps[]
    newPostChange: string
};

type mapDispatchToPropsType = {
    addPost: () => void
    changeNewText: (newText: string) => void
};

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostChange: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {dispatch(AddPostAction());},
        changeNewText: (newText: string) => {dispatch(ChangeNewTextAction(newText));},
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

