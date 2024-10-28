import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home.js';
import About from './components/About';
import Header from './components/Header.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
);
