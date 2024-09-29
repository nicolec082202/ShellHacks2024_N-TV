import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Route and Switch components
import HomePage from './HomePage';
import DonorSignUpPage from './DonorSignUpPage';
import ShelterSignUpPage from './ShelterSignUpPage';
import DonorHomePage from './DonorHomePage';
import ShelterHomePage from './ShelterHomePage';
import ShelterSignInPage from './ShelterSignInPage';
import DonorSignInPage from './DonorSignInPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<HomePage/>} />
        <Route path="/DonorSignUp" element={<DonorSignUpPage/>} />
        <Route path="/ShelterSignUp" element={<ShelterSignUpPage/>} />
        <Route path="/DonorSignIn" element={<DonorSignInPage/>} />
        <Route path="/ShelterSignIn" element={<ShelterSignInPage/>} />
        <Route path="/DonorHomePage" element={<DonorHomePage/>} />
        <Route path="/ShelterHomePage" element={<ShelterHomePage/>} />

        </Routes>
    </div>
  );
}

export default App;