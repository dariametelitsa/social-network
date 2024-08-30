// @flow
import * as React from 'react';
import { SocialMediaType } from "api/usersAPI";
import { Contact } from "components/common/contacts/Contact";

type Props = {
    contacts: SocialMediaType
};

export const Contacts = ({contacts}: Props) => {
    return (
        <div>
            {
                Object.entries(contacts).map(c => {
                    if(c[1]) {
                        return (<Contact contactTitle={c[0]} contactValue={c[1]}/>)
                    }
                })
            }
        </div>
    );
};


