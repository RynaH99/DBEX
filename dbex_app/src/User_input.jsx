import React, { useEffect, useState } from 'react';
import './User_input.css'

export default function User_input(){

    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
      // Fetch data from API when the component mounts
        fetch('http://localhost:5000/api/users')
        .then(response => response.json())
        .then(data => {
            setBackendData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []); // Empty dependency array ensures this effect runs only once

    const handleChange = (index, key,value) => {
        const newData = [...backendData];
        newData[index][key] = value;
        setBackendData(newData)
    }

    return(
        <>
        <div>
            {backendData.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <table border="1">
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
        {/* <div>
            <button>
                test
            </button>
        </div> */}
        </>
    );
}