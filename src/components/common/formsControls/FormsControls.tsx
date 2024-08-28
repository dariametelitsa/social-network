// @flow 
import * as React from 'react';
import { Field, WrappedFieldProps } from "redux-form";
import s from './FormControls.module.scss'

// type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type Props = WrappedFieldProps & {
    tag: 'textarea' | 'input'
}

export const FormControl = ({input, meta, tag, ...props}: Props) => {
    const hasError = meta.touched && meta.error
    const Tag = tag;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            {tag === 'textarea'
                ? <textarea {...input} {...props} className={s.input}/>
                : <input {...input} {...props} className={s.input}/>
            }
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const createField = (name: string, placeholder: string, validators: Function[], component: ({
                                                                                                       input,
                                                                                                       meta,
                                                                                                       tag,
                                                                                                       ...props
                                                                                                   }: Props) => JSX.Element) =>
    (<Field name={name} placeholder={placeholder} validate={validators} component={component}/>);