import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';

import './App.css';

const App = () => {
  return(
    <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
);
};

export default App;
