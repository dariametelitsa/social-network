import React from 'react';

export const Header:React.FC = ({children}) => {
    return (
        <div>
            <h1>Header</h1>
            {children}
        </div>
    );
};
