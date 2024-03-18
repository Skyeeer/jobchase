// App.js
import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import style from './style.module.css';
import bookmark from './bookmark.png';
// import jobs from './jobs.json';
// console.log(jobs);

const Header = ({ onSearchChange }) => {
    return (
        <header className={style.header}>
            <img src={logo} alt="logo gone" width="300" height="60"></img>
            <input className={style.search} type='text' placeholder='SEARCH' onChange={(e) => onSearchChange(e.target.value)}></input>
        </header>
    );
};

const Aside = ({ jobs, onCardClick }) => {
    return (
        <aside className={style.aside}>
            <div className={style.cardContainer}>
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id} onClick={() => onCardClick(job)}>
                            <div className={style.card}>
                                <div className={style.cardhead}>
                                    <h2 className={style.position}>{job.position}</h2>
                                    <img className={style.bookmark} src={bookmark} width={30} height={30} alt='Bookmark'></img>
                                </div>
                                <p className={style.org}>{job.company}</p>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illo ea vero maxime maiores temporibus.</p>
                                <div className={style.tags}>
                                    <div className={style.tag}>{job.location}</div>
                                    <div className={style.tag}>{job.contract}</div>
                                    <div className={style.tag}>{job.level}</div>
                                    {job.languages.map((language) => (
                                        <div className={style.tag} key={language}>{language}</div>
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
    if (!job) return <main></main>;

    //************MÅSTE STYLAS************
    return (
        <main className={style.main}>
            <div className={style.article}>
                <div className={style.heroImg}></div>
                <div className={style.artBody}>
                    <h2 className={style.position}>{job.position}</h2>
                    <p className={style.org}>{job.company}</p>
                    <button className={style.apply}>Apply</button>
                    <p>{job.description || 'Job description goes here.'}</p>
                </div>
            </div>
        </main>
    );
};

const App = () => {
    // const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobs, setJobs] = useState([]);
    const handleCardCheck = (job) => {
        setSelectedJob(job);
    };
    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    //FETCH METOD
    useEffect(() => {
        fetch('jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error with fetching', error));
    }, []);

    const filteredJobs = jobs.filter((job) =>
        job.location.toLowerCase().includes(searchTerm) ||
        job.contract.toLowerCase().includes(searchTerm) ||
        job.level.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.languages.some(language => language.toLowerCase().includes(searchTerm))
    );


    return (
        <div>
            <Header onSearchChange={handleSearch} />
            <div style={{ display: 'flex' }}>
                <Aside onCardClick={handleCardCheck} jobs={filteredJobs} />
                <Main job={selectedJob} />
            </div>
        </div>
    );
};


export default App;
