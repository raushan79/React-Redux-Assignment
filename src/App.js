import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Redux Assignment</h1>
     <BrowserRouter>
      <Navbar/>
     </BrowserRouter>
    </div>
  );
}

export default App;
