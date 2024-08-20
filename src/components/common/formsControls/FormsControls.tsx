// @flow 
import * as React from 'react';
import { WrappedFieldProps } from "redux-form";
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
                ? <textarea {...input} {...props} />
                : <input {...input} {...props}/>
            }
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};