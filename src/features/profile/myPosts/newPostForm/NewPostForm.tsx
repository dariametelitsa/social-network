// @flow
import * as React from 'react';
import s from "./../MyPosts.module.scss";
import { Field, reduxForm } from "redux-form";
import { FormEventHandler } from "react";
import { MyPostsFormType } from "features/profile/myPosts/MyPosts";
import { maxLengthCreator, required } from "common/utils/validators/validators";
import { FormControl } from "components/common/formsControls/FormsControls";

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
};
const maxLength30 = maxLengthCreator(30);

export const NewPostForm = (props: Props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPost'} placeholder={"Print your idea..."} component={FormControl} tag={'textarea'} validate={[required, maxLength30]}/>
            <button className={s.addPostButton}>Add post</button>
        </form>
    );
};

export const NewPostReduxForm = reduxForm<MyPostsFormType>({
    form: 'newPost'
}) (NewPostForm)