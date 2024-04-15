import { signInWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../firebase.config";
import style from '../style.module.css';
import { useAuth } from './chase';

interface FormData {
    email: string;
    password: string;
}


const SignInForm: React.FC = () => {
    const navigate = useNavigate();

    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const formSubmit: SubmitHandler<FormData> = (data) => {
        console.log("Form submitted:", data);
        const { email, password } = data;

        signInWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User signed in:", user);
                navigate("/home");
                login();
                // localStorage.setItem('isLoggedIn', 'true');
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });
    };

    return (
        <>
            <div className={`${style.loginBackground} flex justify-center items-center`}>
                <div className="bg-black bg-opacity-75 p-8 rounded-lg">
                    <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-white">Email:</label>
                            <input
                                id="email"
                                type="email"
                                className="w-full p-2"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-white">Password:</label>
                            <input
                                id="password"
                                type="password"
                                className="w-full p-2"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    }
                                })}
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <button

                            type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Log in</button>
                    </form>
                    <Link to="/SignUpPage" className="text-center text-white block mt-4 hover:underline">Don't have an account? Sign Up</Link>
                </div>
            </div>
        </>
    )
}

export default SignInForm;

