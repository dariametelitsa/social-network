import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";

function App():JSX.Element {
  return (
    <div className="app-wrapper">
     {/*<Header>*/}
     {/*</Header>*/}
        <header className={'header'}>
            <img height={'50'} src={'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1712247807~exp=1712248407~hmac=a45f8e78ac09f0bdeeea333f1d5691da05eef570d558e4ded52cc142208eba55'}/>
        </header>
        <nav className={'nav'}>
            <ul>
                <li><a href={'#1'}>Profile</a></li>
                <li><a href={'#1'}>Message</a></li>
                <li><a href={'#1'}>News</a></li>
                <li><a href={'#1'}>Music</a></li>
                <li><a href={'#1'}>Settings</a></li>
            </ul>
        </nav>
        <main className={'main'}>
            <img height={'200'} src={'https://www.kino-teatr.ru/news/30463/272783.jpg'}/>
            <div>avatar + descr</div>
            <div>my posts</div>

        </main>
    </div>
  );
}

export default App;
