// App.js
import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import logo from '../logo.png';
import style from '../style.module.css';
import bookmark from '../bookmark.png';
import SignUpPage from './signUpPage';
import account from '../account.png'
// import 'tailwindcss/tailwind.css';
import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './signInPage';
import LandingPage from './landing';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


// import jobs from './jobs.json';
// console.log(jobs);

interface Job {
    id: string;
    position: string;
    company: string;
    location: string;
    contract: string;
    level?: string;
    languages: string[];
    description?: string;
}

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    login: () => void;
    logout: () => void;
}

const defAuthContex: AuthContextType = {
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    login: () => {
        console.log("Login");
    },
    logout: () => {
        console.log("Logout");
    },

};

interface ChildProp {
    children: ReactNode;
}


const AuthContext = createContext<AuthContextType>(defAuthContex);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<ChildProp> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true); // Might just set logged in status or could be extended.
        console.log("Logged in via context");
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
        console.log("Logged out via context");
    }, []);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsLoggedIn(!!user);
            if (!user) {
                // Handle what happens if the user is logged out
                console.log("User is logged out");
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

interface HeaderProps {
    onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {

    // const { isLoggedIn } = useAuth();
    // const { setIsLoggedIn } = useContext(AuthContext);
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    return (
        <header className={style.head}>
            <div className={style.header}>
                <img src={logo} alt="logo" width="300" height="60"></img>
                <input className={style.search} type='text' placeholder='SEARCH' onChange={(e) => onSearchChange(e.target.value)}></input>
                <div> <p>Death</p></div>
            </div>
            <div className="flex flex-col items-center justify-center">
                {isLoggedIn ? (
                    <>
                        {/* User image placeholder */}
                        <img src={account} alt='Profile' className="w-20 h-20 rounded-full mb-3"></img>
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                // localStorage.setItem('isLoggedIn', 'false');

                            }}
                            className="text-green-500 border border-green-500 bg-white text-lg py-1 px-3 shadow-md mt-1 hover:bg-green-500 hover:text-white"
                        >
                            Logga Ut
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/SignUpPage">
                            <h2 className="text-green-500 border border-green-500 bg-white text-lg py-1 px-3 shadow-md mt-1 hover:bg-green-500 hover:text-white">
                                Sign Up
                            </h2>
                        </Link>
                        <p className="text-xs">or</p>
                        <Link to="/SignInPage">
                            <h2 className='text-green-500 border border-green-500 bg-white text-lg py-1 px-3 shadow-md mt-1'>
                                Login
                            </h2>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

interface AsideProps {
    jobs: Job[];
    onCardClick: (job: Job) => void;
}

const Aside: React.FC<AsideProps> = ({ jobs, onCardClick }) => {
    return (
        <aside className={style.aside}>
            <div className={style.cardContainer}>
                <ul>
                    {jobs.map((job) => (

                        <div className={style.card} key={job.id}>
                            <li onClick={() => onCardClick(job)}>
                                <div className={style.cardhead}>
                                    <h2 className={style.position}>{job.position}</h2>
                                    <img className={style.bookmark} src={bookmark} alt='Bookmark'></img>
                                </div>
                                <p className={style.org}>{job.company}</p>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illo ea vero maxime maiores temporibus.</p>
                                <div className={style.tags}>
                                    {job.location && <div className={style.tag}>{job.location}</div>}
                                    {job.contract && <div className={style.tag}>{job.contract}</div>}
                                    {job.level && <div className={style.tag}>{job.level}</div>}
                                    {job.languages && job.languages.map((language) => (
                                        language && <div className={style.tag} key={language}>{language}</div>
                                    ))}
                                </div>
                            </li>
                        </div>

                    ))}
                </ul>
            </div>
        </aside >
    );
};

interface MainProps {
    job?: Job;
    jobs: Job[];
}

const Main: React.FC<MainProps> = ({ job, jobs }) => {
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



const App: React.FC = () => {
    // const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState<Job | undefined>(undefined);
    const [jobs, setJobs] = useState<Job[]>([]);
    const handleCardCheck = (job: Job) => {
        setSelectedJob(job);
    };
    const clearSelectedJob = () => {
        setSelectedJob(undefined);
    }
    const handleSearch = (term: string) => {
        setSearchTerm(term.toLowerCase());
    }

    //FETCH METOD
    useEffect(() => {
        const fetchJson = process.env.PUBLIC_URL + '/jobs.json';
        fetch(fetchJson)
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error with fetching', error));
    }, []);

    const filteredJobs = jobs.filter((job) =>
        (job.location?.toLowerCase() ?? '').includes(searchTerm) ||
        (job.contract?.toLowerCase() ?? '').includes(searchTerm) ||
        (job.level?.toLowerCase() ?? '').includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.languages.some(language => language.toLowerCase().includes(searchTerm))
    );

    const ProtectedRoute: React.FC<ChildProp> = ({ children }) => {
        const { isLoggedIn } = useAuth();

        return isLoggedIn ? children : <Navigate to="/SignInPage" replace />;
    };


    return (
        <AuthProvider>
            <BrowserRouter basename="/jobchase">
                <Routes>
                    {/* <Route path="/" element={
                        <>
                            <Header onSearchChange={handleSearch} />
                            <div style={{ display: 'flex' }}>
                                <Aside onCardClick={handleCardCheck} jobs={filteredJobs} />
                                <Main job={selectedJob} />
                            </div>
                        </>
                    } /> */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/SignUpPage" element={<SignUpPage />} />
                    <Route path="/SignInPage" element={<SignInPage />} />
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <>
                                    <Header onSearchChange={handleSearch} />
                                    <div style={{ display: 'flex' }}>
                                        <Aside onCardClick={handleCardCheck} jobs={filteredJobs} />
                                        <Main job={selectedJob} jobs={filteredJobs} />
                                    </div>
                                </>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};



export default App;
