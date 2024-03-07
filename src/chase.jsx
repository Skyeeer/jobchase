// App.js
import React from 'react';
import logo from './logo.png';
import './style.css';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo gone" width="300" height="60"></img>
            <input className='search' type='text' placeholder='SEARCH' ></input>
        </header>
    );
};

const Aside = () => {
    return (
        <aside>
            <h2>This is the aside</h2>
        </aside>
    );
};

const Main = () => {
    return (
        <main>
            <h2>This is the main content</h2>
        </main>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <Aside />
                <Main />
            </div>
        </div>
    );
};


export default App;
