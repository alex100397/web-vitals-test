// MainRoutes.jsx (or in index.js)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Inp from './inp';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inp" element={<Inp />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
