import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Expenses from './Pages/Expenses';
import IOUs from './Pages/IOUs';
import UOIs from './Pages/UOIs';
function App() {
  return (
    <>
    <Navbar/>
    <div className='App-header'>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/expenses" element={<Expenses/>}/>
          <Route path="/ious" element={<IOUs/>}/>
          <Route path="/uois" element={<UOIs/>}/>
        </Route>

        {/* <Route path="*" element={<Expenses/>}/> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
