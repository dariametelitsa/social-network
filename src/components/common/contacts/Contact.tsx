
import * as React from 'react';

type Props = {
    contactTitle: string
    contactValue: string
};
export const Contact = ({contactTitle, contactValue}: Props) => {
    return (
        <div>
            <b>{contactTitle}</b> : <span>{contactValue}</span>
        </div>
    );
};