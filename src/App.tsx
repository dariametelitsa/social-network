import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";

function App():JSX.Element {
  return (
    <div className="App">
     <Header>
         <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
         </ul>
     </Header>
    </div>
  );
}

export default App;
