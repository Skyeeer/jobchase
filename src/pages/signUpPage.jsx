
import React from 'react';
import SignupForm from './signupForm';

function SignUpPage() {
    return (
        <div className="flex w-full h-screen">
            <aside className="w-1/2 h-full">
                <img
                    src="/path-to-your-awsome-bild" // Replace with your actual image path
                    alt="Side pics"
                    className="w-full h-full object-cover" // This ensures the image covers the full aside area
                />
            </aside>
            <main className="w-1/2 flex justify-center items-center bg-white">
                <SignupForm />
            </main>
        </div>
    );
}

export default SignUpPage;
