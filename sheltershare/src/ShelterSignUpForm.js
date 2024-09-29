import React, { useState } from 'react';

function ShelterSignUpForm() {
  // Step 2: Define state variables for each input field
  const [shelterName, setShelterName] = useState('');
  const [shelterAddress, setShelterAddress] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Perform form submission logic (e.g., send data to an API)
    console.log('Form submitted: ', { shelterName, shelterAddress, identificationNumber });
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
    </div>
  );
}

export default ShelterSignUpForm;
