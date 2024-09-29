import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Route and Switch components
import HomePage from './HomePage';
import DonorSignUpPage from './DonorSignUpPage';
import SetGoalsPage from './SetGoalsPage';
import ShelterSignUpPage from './ShelterSignUpPage';
import DonorHomePage from './DonorHomePage';
import ShelterHomePage from './ShelterHomePage';
import ShelterSignInPage from './ShelterSignInPage';
import DonorSignInPage from './DonorSignInPage';
import EditGoalsPage from './EditGoalsPage';
import IncomingDonation from './IncomingDonation';
import ProgressBar from './ProgressBar';

function App() {
  // State to store goal values
  const [foodGoal, setFoodGoal] = useState(0);
  const [clothingGoal, setClothingGoal] = useState(0);
  const [toiletGoal, setToiletGoal] = useState(0);

  // State to store donation values
  const [foodDonated, setFoodDonated] = useState(0);
  const [clothingDonated, setClothingDonated] = useState(0);
  const [toiletDonated, setToiletDonated] = useState(0);

  // Handler for setting goals (used in SetGoalsPage and EditGoalsPage)
  const handleSetGoals = (newFoodGoal, newClothingGoal, newToiletGoal) => {
    setFoodGoal(newFoodGoal);
    setClothingGoal(newClothingGoal);
    setToiletGoal(newToiletGoal);
  };

  // Handler for recording donations (used in IncomingDonationPage)
  const handleDonation = ({ foodDonated, clothingDonated, toiletDonated }) => {
    setFoodDonated(foodDonated);
    setClothingDonated(clothingDonated);
    setToiletDonated(toiletDonated);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DonorSignUp" element={<DonorSignUpPage />} />
        <Route path="/ShelterSignUp" element={<ShelterSignUpPage />} />
        <Route path="/DonorSignIn" element={<DonorSignInPage />} />
        <Route path="/ShelterSignIn" element={<ShelterSignInPage />} />
        <Route path="/DonorHomePage" element={<DonorHomePage />} />
        <Route path="/ShelterHomePage" element={<ShelterHomePage />} />
        
        {/* Set goals page to set initial goal values */}
        <Route
          path="/SetGoals"
          element={<SetGoalsPage onSubmit={handleSetGoals} />}
        />

        {/* Edit goals page to update existing goals */}
        <Route
          path="/EditGoals"
          element={<EditGoalsPage onSubmit={handleSetGoals} />}
        />

        {/* Incoming donation page to accept donations */}
        <Route
          path="/IncomingDonation"
          element={<IncomingDonation onSubmit={handleDonation} />}
        />

        {/* Shelter home page with progress bars */}
        <Route
          path="/ShelterHomePage"
          element={
            <div>
              <h2>Shelter Progress</h2>
              <ProgressBar
                donated={foodDonated}
                goal={foodGoal}
                label="Food Donations"
              />
              <ProgressBar
                donated={clothingDonated}
                goal={clothingGoal}
                label="Clothing Donations"
              />
              <ProgressBar
                donated={toiletDonated}
                goal={toiletGoal}
                label="Toiletries Donations"
              />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
