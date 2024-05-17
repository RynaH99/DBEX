'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import './globals.css'


export default function EditableTable(){

    const [backendData, setBackendData] = useState([]);
    const [hasChanges, setHasChanges] = useState([false]);

        //? Calls data from backend api 
    useEffect(() => {
        fetch('http://localhost:5000/api/users')
        .then(response => response.json())
        .then(data => {
            setBackendData(data);
        console.log(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []); //? add empty dependency [] to make sure that api is only called once

    const handleChange = (index, key, value) => {
        const updatedData = backendData.map((item, idx) => {
            if (idx === index) {
                return { ...item, [key]: value };
            } else {
                return item;
            }
        });
        setBackendData(updatedData);
        setHasChanges(true);
    };

    const saveToDatabase = () => {
        if (hasChanges) {
            console.log("Changes were made to the users table. Pushing data,", backendData);

            backendData.forEach(user => {
            axios.put(`http://localhost:5000/api/new_user/${user._id}`, user)
                .then(response => {
                    console.log('Updated Successfully', response.data);
                })
                .catch(error => {
                    console.error("Error updating user info", error);
                })
            })
            setHasChanges(false);
        } else {
            console.log("No Changes Detected")
        }
        
    }


    return(
        <>
        <div className='p-3'>
            <button className='bg-black hover:bg-black-lightest text-white font-bold py-2 px-4 rounded-full border border-black-700 m-1 p-4' onClick={saveToDatabase}>Save to Database</button>
        </div>
        <div className='pl-5'>
            {backendData.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <table  className='box-border p-4 border-4 border-white-400 bg-blue-200' >
                <tr>
                    {/* model for user info */}
                    <td>User ID</td>
                    <td>User Name</td>
                    <td>User Password</td>
                    {/* <td>Customer Phone #</td>
                    <td>Customer Address</td> */}
                </tr>
                {backendData.map((user,index) => (
                <tr key={user._id}>
                    <td>
                        <input
                            type="text"
                            value={user._id}
                            onChange={(e) => handleChange(index, '_id', e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={user.username}
                            onChange={(e) => handleChange(index, 'username', e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={user.password}
                            onChange={(e) => handleChange(index, 'password', e.target.value)}
                        />
                    </td>
                </tr>
                ))}
            </table>
            )}
        </div>
        </>
    );
}