import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button'; // Import your reusable Button component

function HomePage() {
    const navigate = useNavigate(); // Call useNavigate
  
    return (
      <div>
        <h1>Shelter Share</h1>
        <p>I am a...</p>
        <div>
        <Button
          text="Shelter"
          onClick={() => navigate('/ShelterSignUp')} // Use navigate to go to /about
        />
        <Button
          text="Donor"
          onClick={() => navigate('/DonorSignUp')} // Use navigate to go to /contact
        />
        </div>
      </div>
    );
  }
  
  export default HomePage;