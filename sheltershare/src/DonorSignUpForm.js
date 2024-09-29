import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function DonorSignUpForm() {
  // Step 2: Define state variables for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize the navigate hook


  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Perform form submission logic (e.g., send data to an API)
    console.log('Form submitted: ', { name, email, address, password });

    navigate('/DonorHomePage');

};

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Step 4: Define form with controlled inputs */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Address:
            <input
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>

        {/* Step 5: Add submit button */}
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => navigate('/DonorSignIn')}>Already have an account? Sign In</button>
    </div>
  );
}

export default DonorSignUpForm;
