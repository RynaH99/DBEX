import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import User_input from './User_input.jsx'
import Add_user from './Add_user.jsx';


function App() {

  // const [backendData, setBackendData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from API when the component mounts
  //   fetch('http://localhost:5000/api/users')
  //     .then(response => response.json())
  //     .then(data => {
  //       setBackendData(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <Header/>
      <User_input/>
      {/* <Add_user/> */}
    </>
  );

}

export default App
