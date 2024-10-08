import React, { useState } from 'react';

function IncomingDonation({ onSubmit }) {
  const [foodDonated, setFoodDonated] = useState(0);
  const [clothingDonated, setClothingDonated] = useState(0);
  const [toiletDonated, setToiletDonated] = useState(0);

  // Function to handle the 'Accept' button click
  const handleAccept = () => {
    // Set values for the donations (you can set them dynamically if needed)
    setFoodDonated(0);  // Example: 100 units of food donated
    setClothingDonated(0); // Example: 50 units of clothing donated
    setToiletDonated(0); // Example: 20 units of toilet items donated

    // Call onSubmit with the updated values
    onSubmit({
      foodDonated: 0,
      clothingDonated: 0,
      toiletDonated: 0
    });
  };

  return (
    <div>
      <h2>Incoming Donation</h2>
      {/* Display the current values */}
      <p>Food Donated: {foodDonated}</p>
      <p>Clothing Donated: {clothingDonated}</p>
      <p>Toilet Items Donated: {toiletDonated}</p>

      {/* Accept button to set the values */}
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
}

export default IncomingDonation;
