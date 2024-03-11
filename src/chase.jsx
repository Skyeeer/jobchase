// App.js
import React, { useState } from 'react';
import logo from './logo.png';
import './style.css';
import bookmark from './bookmark.png';
import jobs from './jobs.json';
console.log(jobs);

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo gone" width="300" height="60"></img>
            <input className='search' type='text' placeholder='SEARCH' ></input>
        </header>
    );
};

const Aside = ({ onCardClick }) => {
    return (
        <aside>
            <div className='cardContainer'>
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id} onClick={() => onCardClick(job)}>
                            <div className='card'>
                                <div className='cardhead'>
                                    <h2 className='position'>{job.position}</h2>
                                    <img className='bookmark' src={bookmark} width={30} height={30} alt='Bookmark'></img>
                                </div>
                                <p className='org'>{job.company}</p>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illo ea vero maxime maiores temporibus.</p>
                                <div className='tags'>
                                    <div className='tag'>{job.location}</div>
                                    <div className='tag'>{job.contract}</div>
                                    <div className='tag'>{job.level}</div>
                                    {job.languages.map((language) => (
                                        <div className='tag' key={language}>{language}</div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside >
    );
};

const Main = ({ job }) => {
    if (!job) return <main>Select a job to see details :)</main>;


    return (
        <main>
            <h2>{job.position} at {job.company}</h2>
            <p>{job.description || 'Job description goes here.'}</p>
        </main>
    );
};

const App = () => {

    const [selectedJob, setSelectedJob] = useState(null);
    const handleCardCheck = (job) => {
        setSelectedJob(job);
    };

    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <Aside onCardClick={handleCardCheck} />
                <Main job={selectedJob} />
            </div>
        </div>
    );
};


export default App;
