
import React from 'react';
import SignupForm from './signupForm';
import thest from '../thest.jpg';

function SignUpPage() {
    return (
        <div className="flex w-full h-screen">
            <aside className="w-1/2 h-full">
                <img
                    src={thest}
                    alt="Side pics"
                    className="w-full h-full object-cover"
                />
            </aside>
            <main className="w-1/2 flex justify-center items-center bg-white">
                <SignupForm />
            </main>
        </div>
    );
}

export default SignUpPage;
