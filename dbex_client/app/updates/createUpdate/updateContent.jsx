'use client';
import '../globals.css';
import Head from 'next/head';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import supabase from '../../supabase/supabaseClient.jsx'

export default function UpdateContent() {

    const [update, setUpdate] = useState('')
    const [response, setResponse] = useState(null)

    const handleChange = (e) => {
        setUpdate(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent the default form submission behavior of reloading page
        const {data,error} = await supabase
            .from('updates')
            .insert([
                {updates: update}
            ])
            .select()

            if (error) {
                console.error('Error Inserting Update:', error)
                setResponse('Error inserting update')
            } else {
                console.log('Update Inserted Successfully:', data)
                setResponse('Update Inserted Successfully!')
            }
    }

    

    return(
        <>
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
                <label className="w-40 mb-2 text-right">Enter Update:</label>
                <input
                    className="p-2 border border-gray-300 rounded mb-4"
                    placeholder="UPDATE"
                    type="text"
                    value={update}
                    onChange={handleChange}
                />
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
            {response && <p>{response}</p>}
        </div>
        </>
    )
}
