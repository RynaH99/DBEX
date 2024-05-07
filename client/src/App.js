import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    // Fetch data from API when the component mounts
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {backendData.map(user => (
            <li key={user._id}>
              <p>Username : {user.username}</p>
              <p>Password : {user.password}</p>
              <p>Created At : {user.createdAt}</p>
              <p>Updated At : {user.updatedAt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;