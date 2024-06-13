//! COMPARE FILE TO TESTING FILE 

'use client'
import { useState } from 'react'
import CreateAccountModal from '@/app/components/CreateAccountModal.jsx'
import { createClient } from '@supabase/supabase-js'
import '@/app/globals.css'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function LoginBox() {

    //? Sets up const to pass email to handleSignIn function
    const [email, setEmail] = useState('')

    //? Sets up const to pass password to handleSignIn function
    const [password, setPassword] = useState('')

    //? Sets up const value to check if signed in
    const [isSignedIn, setIsSignedIn] = useState(false)

    //? Sets up const get errors from sign in function
    const [error, setError] = useState(null)

    //? set initial state for Modal to be closed
    const [isModalOpen, setIsModalOpen] = useState(false) 

    //? Function to check supabase authorization with inputs of email & password
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                throw error;
            }
            setIsSignedIn(true);
            setError(null);
        } catch (error) {
            console.error('Sign in error:', error.message);
            setError(error.message);
        }
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.elements.email.value
        const password = form.elements.password.value

        try{
            const {error} = await supabase.auth.signUp({
                email,
                password,
            })
            if (error) {
                throw error
            }
            setIsModalOpen(false);
            setError(null)
        } catch (error) {
            console.error('Sign Up Error:', error.message)
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-start h-screen p-4">
            <div className="p-6 ml-16">
                <h1 className="p-8 text-6xl font-bold">Sign In</h1>
                <form onSubmit={handleSignIn}>

                    {/* //? Email input field */}
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

                    {/* //? Password input field */}
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

                    {/* //? Remember Me checkbox */}
                    <div className="flex items-center mb-4 p-2">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            className="mr-2 transform scale-150"
                        />
                        <label htmlFor="rememberMe" className="text-black">Remember Me</label>
                    </div>

                    {/* //? div to display button */}
                    <div className="flex justify-center p-2">
                        <button className="bg-black text-white font-bold py-2 px-4 border border-black rounded-full w-full hover:bg-gray-900 hover:text-stone-200 shadow-lg shadow-black/20">
                            Login
                        </button>
                    </div>

                    {/* //? conditional HTML if there is an error */}
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                    {/* //? conditional HTML if login is a success */}
                    {isSignedIn && <p className="text-green-500 text-center mt-2">You are signed in!</p>}

                    {/* //? Create Account button */}
                    <div className="flex justify-center">
                        <button type="button" onClick={() => setIsModalOpen(true)} className="text-black font-bold underline py-2 px-4 rounded hover:text-stone-600">Create Account</button>
                    </div>
                    <CreateAccountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleCreateAccount} />
                </form>
            </div>
        </div>
    );
}

//! COMPARE FILE TO TESTING FILE 