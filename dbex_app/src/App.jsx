// import React, { useEffect, useState } from 'react';
import './CSS Files/App.css'
import Header from './header.jsx'
import Save_to_DB from './Save_to_DB.jsx';
import Editable_table from './Editable_table.jsx';


function App() {

  return (
    <>
      <Header/>
      {/* <Save_to_DB/> */}
      <Editable_table/>
    </>
  );

}

export default App
