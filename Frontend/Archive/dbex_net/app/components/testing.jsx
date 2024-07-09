'use client';
import { useState } from 'react';
import CreateAccountModal from '@/app/components/CreateAccountModal.jsx';
import { createClient } from '@supabase/supabase-js';
import '@/app/globals.css';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function LoginBox() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            setIsSignedIn(true);
            setError(null);
        } catch (error) {
            console.error('Sign in error:', error.message);
            setError(error.message);
        }
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        try {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            setIsModalOpen(false);
            setError(null);
        } catch (error) {
            console.error('Sign Up Error:', error.message);
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-start h-screen p-4">
            <div className="p-6 ml-16">
                <h1 className="p-8 text-6xl font-bold">Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="border-b-2 border-black outline-none w-full p-2"
                            placeholder="Email*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="border-b-2 border-black outline-none w-full p-2"
                            placeholder="Password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center mb-4 p-2">
                        <input type="checkbox" id="rememberMe" className="mr-2 transform scale-150" />
                        <label htmlFor="rememberMe" className="text-black">Remember Me</label>
                    </div>
                    <div className="flex justify-center p-2">
                        <button className="bg-black text-white font-bold py-2 px-4 border border-black rounded-full w-full hover:bg-gray-900 hover:text-stone-200 shadow-lg shadow-black/20">Login</button>
                    </div>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                    {isSignedIn && <p className="text-green-500 text-center mt-2">You are signed in!</p>}
                    <div className="flex justify-center">
                        <button type="button" onClick={() => setIsModalOpen(true)} className="text-black font-bold underline py-2 px-4 rounded hover:text-stone-600">Create Account</button>
                    </div>
                </form>
                <CreateAccountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleCreateAccount} />
            </div>
        </div>
    );
}
