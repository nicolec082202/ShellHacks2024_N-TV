import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
var ID;

function ShelterSignUpForm() {
  // Step 2: Define state variables for each input field
  const [shelterName, setShelterName] = useState('');
  const [shelterAddress, setShelterAddress] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');

  const navigate = useNavigate(); // Initialize the navigate hook

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Perform form submission logic (e.g., send data to an API)
    console.log('Form submitted: ', { shelterName, shelterAddress, identificationNumber });
    ID = identificationNumber;
    const newShelter = Shelter.build({
      shelterName : shelterName,
      shelterAddress : shelterAddress,
      shelterId : identificationNumber,
      toiletriesGoal : '0',
      foodGoal : '0',
      clothesGoal : '0',
      toiletriesDonated : '0',
      foodDonated : '0',
      clothesDonated : '0',
    })
    navigate('/ShelterHomePage');

};

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Step 4: Define form with controlled inputs */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Shelter Name:
            <input
              type="text"
              value={shelterName}
              onChange={(e) => setShelterName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Shelter Address:
            <input
              type="address"
              value={shelterAddress}
              onChange={(e) => setShelterAddress(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Identification No.:
            <input
              type="password"
              value={identificationNumber}
              onChange={(e) => setIdentificationNumber(e.target.value)}
              required
            />
          </label>
        </div>

        {/* Step 5: Add submit button */}
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => navigate('/ShelterSignIn')}>Already have an account? Sign In</button>
    </div>
  );
}

export default ShelterSignUpForm;
