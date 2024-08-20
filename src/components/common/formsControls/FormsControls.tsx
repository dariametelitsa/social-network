// @flow 
import * as React from 'react';
import { WrappedFieldProps } from "redux-form";
import s from './FormControls.module.scss'

// type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type Props = WrappedFieldProps & {
    type: 'textarea' | 'input'
}

export const Textarea = ({input, meta, type, ...props}: Props) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            {type === 'textarea'
                ? <textarea {...input} {...props} />
                : <input {...input} {...props}/>
            }
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};