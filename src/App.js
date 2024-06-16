import React from 'react';
import './App.css';
import Header from './Components/Header'; // Ensure the path matches your folder structure
import Contents from './Components/Contents';
import  Signup  from './Components/Signup';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/signup' element={<Signup/>  } />
      <Header />
      <Contents />
    </div>
  );
}

export default App;
