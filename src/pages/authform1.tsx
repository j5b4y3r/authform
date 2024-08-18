"use client"


import React, { useState } from 'react';
import Button from "@/components/button";

const AuthForm1: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'dark' : 'from-indigo-400 via-purple-500 to-green-400'} bg-gradient-to-r transition-colors duration-300`}>
            <div className="absolute top-4 right-4">
                <button
                    onClick={toggleDarkMode}
                    className="py-2 px-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl transition-colors duration-300">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100">
                    {isSignUp ? 'Create Your Account' : 'Welcome Back'}
                </h2>
                <form className="mt-8 space-y-6">
                    {isSignUp && (
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="relative block w-full px-4 py-3 text-gray-900 dark:text-gray-100 dark:bg-gray-600 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transform transition-transform duration-100 focus:scale-105"
                                placeholder="Full Name"
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="relative block w-full px-4 py-3 text-gray-900 dark:text-gray-100 dark:bg-gray-600 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transform transition-transform duration-100 focus:scale-105"
                            placeholder="Email Address"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="relative block w-full px-4 py-3 text-gray-900 dark:text-gray-100 dark:bg-gray-600 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transform transition-transform duration-100 focus:scale-105"
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
                                    alt="Hide password"
                                    className="w-6 h-6 text-gray-500 dark:text-gray-300 transform transition-transform duration-300 hover:scale-125"
                                />
                            ) : (
                                <img
                                    decoding="async"
                                    src="https://www.svgrepo.com/show/524043/eye.svg"
                                    alt="Show password"
                                    className="w-6 h-6 text-gray-500 dark:text-gray-300 transform transition-transform duration-300 hover:scale-125"
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
                                className="w-4 h-4 text-purple-600 border-gray-300 dark:border-gray-600 rounded focus:ring-purple-500 transition-all duration-310 transform hover:scale-110 checked:bg-purple-600 checked:border-transparent checked:scale-110"
                            />
                            <label htmlFor="terms" className="block ml-2 text-sm text-gray-900 dark:text-gray-100">
                                I agree to the{' '}
                                <a href="#" className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500">
                                    Terms & Privacy
                                </a>
                            </label>
                        </div>
                            ) : (
                        <div className="text-sm">
                            <a href="#" className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500">
                                Forgot password?
                            </a>
                        </div>
                            )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:from-pink-500 hover:to-purple-500 transition-transform duration-300 hover:scale-105"
                    >
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </Button>
                </form>

                <div className="relative mt-6">
                    <hr className="border-t border-gray-300 dark:border-gray-600"/>
                    <span className="absolute inset-x-0 flex justify-center text-sm text-gray-500 dark:text-gray-400 -top-3 bg-white dark:bg-gray-800 px-2">
                        or
                    </span>
                </div>

                <div className="flex justify-center space-x-4">
                <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-transform duration-300 hover:scale-105"
                    >
                        <img src="/img/7123025_logo_google_g_icon.svg" alt="Google" className="w-5 h-5 mr-2"/>
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-transform duration-300 hover:scale-105"
                    >
                        <img src="/img/294700_apple_icon.svg" alt="Apple" className="w-5 h-5 mr-2"/>
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-transform duration-300 hover:scale-105"
                    >
                        <img src="/img/5296499_fb_facebook_facebook%20logo_icon.svg" alt="Facebook"
                             className="w-5 h-5 mr-2"/>
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {isSignUp ? (
                            <>
                                Already have an account?{' '}
                                <button
                                    onClick={toggleSignUp}
                                    className="font-medium text-purple-600 hover:text-purple-500  transform transition-transform duration-300 hover:scale-105"
                                >
                                    Sign in
                                </button>
                            </>
                        ) : (
                            <>
                                Don't have an account?{' '}
                                <button
                                    onClick={toggleSignUp}
                                    className="font-medium text-purple-600 hover:text-purple-500  transform transition-transform duration-300 hover:scale-105"
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

export default AuthForm1;
