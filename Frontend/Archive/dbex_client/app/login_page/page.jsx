import React from 'react';
import LoginHeader from './login_header.jsx';
import Login_Input from './login_input.jsx'
import './globals.css'

export default function LoginPage() {
    return (
        <>
            <title>DBEX Login</title>
            <div className="bg-black min-h-screen">
                <LoginHeader />
                <Login_Input/>
            </div>
            
        </>
    );
}