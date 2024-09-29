import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ShelterSignInForm() {
  // Define state variables for email and password
  const [shelterName, setShelterName] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Perform sign-in logic (e.g., authenticate user)
    console.log('Sign-in form submitted: ', { shelterName, identificationNumber });
    ID = identificationNumber;
    // Example: You could call an API or service here
    // signInWithEmail(email, password);

    navigate('/ShelterHomePage');

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Shelter Name:
            <input
              type="shelterName"
              value={shelterName}
              onChange={(e) => setShelterName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Identification No.:
            <input
              type="identificationNumber"
              value={identificationNumber}
              onChange={(e) => setIdentificationNumber(e.target.value)}
              required
            />
          </label>
        </div>

        {/* Sign In button */}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default ShelterSignInForm;
