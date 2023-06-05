import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
function App() {
  return (
   <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
   </Routes>
  );
}

export default App;
