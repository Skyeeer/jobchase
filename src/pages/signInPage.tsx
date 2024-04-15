import SignInForm from './signinForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './chase';
import React from 'react';


function SignInPage() {

    // const navigate = useNavigate();
    // const { isLoggedIn } = useAuth();


    // React.useEffect(() => {
    //     if (isLoggedIn) {
    //         navigate('/home');
    //     }
    // }, [isLoggedIn, navigate]);
    return (
        <div>
            <SignInForm />
        </div>
    );
}

export default SignInPage;