import React from 'react';
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";



function Signupform() {

    const navigate = useNavigate();
    const {
        register,
        handlesubmit,
        watch,
        formState: { errors }
    } = useForm();


    const formSubmit = (data) => {
        createUserWithEmailAndPassword(Auth, data.email, data.password)
            .then(() => {
                navigate("/signin");
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            });

        //     return (         STOLEN
        //         <form onSubmit={handleSubmit(formSubmit)}>
        //             <div>
        //                 <label htmlFor="email">Email:</label>
        //                 <input
        //                     id="email"
        //                     type="email"
        //                     {...register("email", {
        //                         required: "Email is required",
        //                         pattern: {
        //                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        //                             message: "Invalid email address"
        //                         }
        //                     })}
        //                 />
        //                 {errors.email && <span>{errors.email.message}</span>}
        //             </div>

        //             <div>
        //                 <label htmlFor="password">Password:</label>
        //                 <input
        //                     id="password"
        //                     type="password"
        //                     {...register("password", {
        //                         required: "Password is required",
        //                         minLength: {
        //                             value: 8,
        //                             message: "Password must be at least 8 characters"
        //                         }
        //                     })}
        //                 />
        //                 {errors.password && <span>{errors.password.message}</span>}
        //             </div>

        //             <div>
        //                 <label htmlFor="confirmPassword">Confirm Password:</label>
        //                 <input
        //                     id="confirmPassword"
        //                     type="password"
        //                     {...register("confirmPassword", {
        //                         required: "Please confirm your password",
        //                         validate: (value) =>
        //                             value === watch("password") || "Passwords do not match"
        //                     })}
        //                 />
        //                 {errors.confirmPassword && (
        //                     <span>{errors.confirmPassword.message}</span>
        //                 )}
        //             </div>

        //             <button type="submit">Register</button>
        //             <Link to="/signin">Already have an account? Sign In</Link>

        //         </form>
        //     );
    }
}
const signup = () => {

    <div className="flex min-h-screen">
        {/* Aside - Left Side */}
        <aside className="w-1/2">
            <img src="your-image-url-here.jpg" alt="Description" className="w-full h-full object-cover" />
        </aside>

        {/* Signup Form - Right Side */}
        <div className="w-1/2 flex justify-center items-center">
            <form className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
}


export default signup;
// export default SignUpForm;