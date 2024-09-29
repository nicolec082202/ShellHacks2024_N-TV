import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Route and Switch components
import HomePage from './HomePage';
import DonorSignUpPage from './DonorSignUpPage';
import ShelterSignUpPage from './ShelterSignUpPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<HomePage/>} />
        <Route path="/DonorSignUp" element={<DonorSignUpPage/>} />
        <Route path="/ShelterSignUp" element={<ShelterSignUpPage/>} />
        </Routes>
    </div>
  );
}

export default App;