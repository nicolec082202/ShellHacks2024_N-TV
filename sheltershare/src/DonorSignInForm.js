import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function DonorSignInForm() {
  // Define state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Perform sign-in logic (e.g., authenticate user)
    console.log('Sign-in form submitted: ', { email, password });

    // Example: You could call an API or service here
    // signInWithEmail(email, password);

    navigate('/DonorHomePage');

    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default DonorSignInForm;
