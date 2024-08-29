import ReactDOM from "react-dom";
import React from "react";
import DialogsContainer from "features/dialogs/DialogsContainer";
import { SamuraiApp } from "App";


it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SamuraiApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});



// import { render, screen } from '@testing-library/react';
// import App from './App';
// test('renders learn react link', () => {
//     render(<SamuraiApp />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });
