// App.js
import React from 'react';
import logo from './logo.png';
import './style.css';
import bookmark from './bookmark.png';

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
            <div className='cardContainer'>
                <ul>
                    <li>
                        <div className='card'><div className='cardhead'>
                            <h2 className='position'>Position</h2>
                            <img className='bookmark' src={bookmark} width={30} height={30} alt='Bookmark'></img>
                        </div>
                            <p className='org'>Company</p>
                            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illo ea vero maxime maiores temporibus.</p>
                            <div className='tags'>
                                <div className='tag'>Sweden</div>
                                <div className='tag'>Part time</div>
                                <div className='tag'>Junior</div>
                                <div className='tag'>Javascript</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside >
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
