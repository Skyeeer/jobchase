// import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../firebase.config";
// import 'tailwindcss/tailwind.css';



function Signupform() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const formSubmit = (data) => {
        createUserWithEmailAndPassword(Auth, data.email, data.password)
            .then(() => {
                navigate("/signin");
                login();
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            });
    };
    return (
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                    id="email"
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                        }
                    })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input
                    id="password"
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        }
                    })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                />
                {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
            </div>

            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">Register</button>
            <Link to="/SignInPage" className="block text-center mt-4 text-green-500 hover:text-green-600">Already have an account? Sign In</Link>
        </form>
    );
}

export default Signupform;
