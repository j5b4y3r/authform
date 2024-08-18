"use client"

import React, { useState } from 'react';
import Button from "@/components/button";


const AuthForm: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg transition-transform duration-300">
                <h2 className="text-2xl text-black font-bold text-center">
                    {isSignUp ? 'Get Started Now' : 'Login Now'}
                </h2>
                <form className="mt-8 space-y-6">

                    {isSignUp && (
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer z-20"
                        >
                {showPassword ? (
                    <img
                        decoding="async"
                        src="https://www.svgrepo.com/show/524041/eye-closed.svg"
                        alt=""
                        className="w-6 h-6 text-gray-500 bg-transparent"
                    />
                ) : (
                    <img
                        decoding="async"
                        src="https://www.svgrepo.com//show/524043/eye.svg"
                        alt=""
                        className="w-6 h-6 text-gray-500 bg-transparent"
                    />
                )}
            </span>
                    </div>

                    <div className="flex items-center justify-between">
                        { isSignUp ? (
                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label htmlFor="terms" className="block ml-2 text-sm text-gray-900">
                                I agree to the{' '}
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Terms & Privacy
                                </a>
                            </label>
                        </div>
                            ):(
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot Password?
                            </a>
                        </div>
                            )}
                    </div>

                    <Button type="submit"
                            className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
                    >
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </Button>
                </form>

                <div className="relative mt-6">
                    <hr className="border-t"/>
                    <span className="absolute inset-x-0 flex justify-center text-sm text-gray-500 -top-3">
                        or
                    </span>
                </div>

                <div className="flex justify-center space-x-4">
                    <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-100"
                    >
                        <img src="/img/7123025_logo_google_g_icon.svg" alt="Google" className="w-5 h-5 mr-2"/>
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-100"
                    >
                        <img src="/img/294700_apple_icon.svg" alt="Apple" className="w-5 h-5 mr-2"/>
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-100"
                    >
                        <img src="/img/5296499_fb_facebook_facebook%20logo_icon.svg" alt="Facebook"
                             className="w-5 h-5 mr-2"/>
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        {isSignUp ? (
                            <>
                                Already have an account?{' '}
                                <button
                                    onClick={toggleSignUp}
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Sign in
                                </button>
                            </>
                        ) : (
                            <>
                                Have an account?{' '}
                                <button
                                    onClick={toggleSignUp}
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Sign up
                                </button>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
