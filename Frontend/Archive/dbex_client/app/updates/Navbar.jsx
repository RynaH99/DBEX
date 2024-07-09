'use client';
import './globals.css'
import Link from 'next/link';
import UpdatePopup from './updatePopup.jsx'
import React, { useState } from 'react';

function Navbar() {
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <nav className="bg-black p-4 border-b border-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center'>
                    <img src='images/Logo.png' alt='DBEX LOGO' className="h-10 w-10 mr-2"/>
                    <h1 className='font-bold py-2 px-4 text-6xl text-white'>DBEX Updates</h1>
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white font-bold hover:text-gray-300">Home</a></li>
                    <li>
                        <Link href="/updates/createUpdate" legacyBehavior>
                            <a className="bg-white text-black border-full rounded p-2 font-bold hover:text-gray-300">Add Update</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;