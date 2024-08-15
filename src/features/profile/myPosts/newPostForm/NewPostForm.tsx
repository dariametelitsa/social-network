// @flow
import * as React from 'react';
import s from "./../MyPosts.module.scss";
import { Field, reduxForm } from "redux-form";
import { FormEventHandler } from "react";
import { MyPostsFormType } from "features/profile/myPosts/MyPosts";
import { maxLengthCreator, required } from "common/utils/validators/validators";
import { Textarea } from "components/common/formsControls/FormsControls";

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
};
const maxLength10 = maxLengthCreator(30);

export const NewPostForm = (props: Props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPost'} placeholder={"Print your idea..."} component={Textarea} validate={[required, maxLength10]}/>
            <button className={s.addPostButton}>Add post</button>
        </form>
    );
};

export const NewPostReduxForm = reduxForm<MyPostsFormType>({
    form: 'newPost'
}) (NewPostForm)