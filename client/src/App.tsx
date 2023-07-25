import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <>
    <header className='App-header'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<HomePage/>}/>
        </Route>
      </Routes>
      </header>
    </>
  );
}

export default App;
