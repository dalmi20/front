import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import globalReducer from "./state"
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer:{
    global: globalReducer,
  }
});
setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>  
  </React.StrictMode>
);
