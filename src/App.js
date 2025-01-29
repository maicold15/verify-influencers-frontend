import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InfluencerDetail from './pages/InfluencerDetail';
import Research from './pages/Research';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/influencer/:id" element={<InfluencerDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
