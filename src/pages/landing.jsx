// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style.module.css';
import logo from '../logo.png';

const LandingPage = () => {
    return (
        <div className='flex h-screen'>
            <div className={style.landing}>
            </div>
            <div className='flex-grow mt-[-6rem]'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-center text-xl font-bold'>Welcome to</h1>
                    <img src={logo} alt='logo' className='w-64' />
                    <Link to="/SignUpPage" className="bg-lime-500 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-lime-600 mt-4">Sign Up</Link>
                </div>
            </div>
        </div>


    );
};

export default LandingPage;