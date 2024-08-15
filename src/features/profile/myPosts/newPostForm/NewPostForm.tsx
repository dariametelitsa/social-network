// @flow
import * as React from 'react';
import s from "./../MyPosts.module.scss";
import { Field, reduxForm } from "redux-form";
import { FormDataType } from "components/login/Login";
import { FormEventHandler } from "react";
import { MyPostsFormType } from "features/profile/myPosts/MyPosts";

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
};
export const NewPostForm = (props: Props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPost'} placeholder={"Print your idea..."} component={'textarea'}/>
            <button className={s.addPostButton}>Add post</button>
        </form>
    );
};

export const NewPostReduxForm = reduxForm<MyPostsFormType>({
    form: 'newPost'
}) (NewPostForm)