// @flow
import * as React from 'react';

type Props = {

};
export const Login = (props: Props) => {
    return (
        <div>
            <input type={"text"} placeholder={'Enter your login'}/>
            <input type={"text"} placeholder={'Enter your password'}/>
            <button>Log in</button>
        </div>
    );
};