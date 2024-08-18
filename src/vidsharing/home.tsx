'use client'

import React, { useState } from 'react';
import Button from "@/components/button";

// Sample video data
const videoData = [
    { id: 1, title: "Amazing Nature", author: "John Doe", thumbnail: "https://via.placeholder.com/300" },
    { id: 2, title: "Tech Review", author: "Jane Smith", thumbnail: "https://via.placeholder.com/300" },
    { id: 3, title: "Travel Vlog", author: "Alice Brown", thumbnail: "https://via.placeholder.com/300" },
    { id: 4, title: "Cooking Tutorial", author: "Tom Wilson", thumbnail: "https://via.placeholder.com/300" },
    { id: 5, title: "Music Video", author: "Emma Green", thumbnail: "https://via.placeholder.com/300" },
];

const VidHome: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
            <header className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg dark:from-gray-800 dark:to-gray-600">
                <h1 className="text-3xl font-extrabold">
                    MyTube
                </h1>
                <Button className="px-4 py-2 rounded-full" onClick={toggleDarkMode}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
            </header>

            <main className="p-4 flex">
                {/* Sidebar */}
                <aside className={`hidden lg:block lg:w-1/4 xl:w-1/5 bg-white dark:bg-gray-800 shadow-lg p-4 transition-transform duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
                    <nav>
                        <ul className="space-y-4">
                            <li className="font-bold">Home</li>
                            <li>Trending</li>
                            <li>Subscriptions</li>
                            <li>Library</li>
                        </ul>
                    </nav>
                </aside>

                {/* Video Grid */}
                <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                    {videoData.map(video => (
                        <div key={video.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <img src={video.thumbnail} alt={`Thumbnail of ${video.title}`} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-bold truncate">{video.title}</h2>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">by {video.author}</p>
                                <Button className="mt-4 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:from-pink-500 hover:to-purple-500 transition-transform duration-300 hover:scale-105">
                                    Watch Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default VidHome;
