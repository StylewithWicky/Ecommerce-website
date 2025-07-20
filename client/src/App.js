import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Landingpage from './pages/Landingpage';
import CategoryPage from './pages/Categorypage'; // Optional: if you’ve created it*/

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Landingpage />} />
         <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </div>
    
  );
}

export default App;

