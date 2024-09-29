import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function SetGoalsPage({onSubmit}){

    const [foodGoal, setFoodGoal] = useState(0);
    const [clothingGoal, setClothingGoal] = useState(0);
    const [toiletGoal, setToiletGoal] = useState(0);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit function passed as props with the updated values
        onSubmit(foodGoal, clothingGoal, toiletGoal);

      };
    
      return (
        <div>

            <div>
                <h1>Set Goals</h1>
            </div>

            <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Food Goal
                <input
                  type="number"
                  value={foodGoal}
                  onChange={(e) => setFoodGoal(parseInt(e.target.value, 10))}
                />
              </label>
            </div>
          </form>

          </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Clothing Goal
                <input
                  type="number"
                  value={clothingGoal}
                  onChange={(e) => setClothingGoal(parseInt(e.target.value, 10))}
                />
              </label>
            </div>
          </form>

          </div>

          <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Toiletries Goal
                <input
                  type="number"
                  value={toiletGoal}
                  onChange={(e) => setToiletGoal(parseInt(e.target.value, 10))}
                />
              </label>
            </div>
          </form>

          </div>

          <button onClick={() => navigate('/ShelterHomePage')}>Submit Goals</button>

        </div>

      );
}

export default SetGoalsPage;

