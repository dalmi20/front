import './App.css';
import React, { useMemo } from 'react';
import Dashboard from './pages/dashboard';
import Dashboard1 from './scenes/dashboard'
import Layout from './scenes/layout'
import Login from './pages/login';
import {themeSettings} from "./theme"
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import TraiterDemande from './scenes/traiterDemande'
import DemandeDetails from './scenes/demandeDetails'
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
   <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
    <Route element={<Layout/>}>
      <Route path='/citizenmanagement' element={<Dashboard1/>}/>
      <Route path='/agentmanagement' element={<TraiterDemande/>}/>
      <Route path='/traiterdemande/details' element={<DemandeDetails/>}/>
    </Route>
   </Routes>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
