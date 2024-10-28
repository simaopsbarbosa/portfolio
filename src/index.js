import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home.js';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
