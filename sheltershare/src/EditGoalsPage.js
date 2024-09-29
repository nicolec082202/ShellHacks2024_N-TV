import React from 'react';
import { useState } from 'react';


function EditGoalsPage({onSubmit}){

    const [foodGoal, setFoodGoal] = useState(0);
    const [clothingGoal, setClothingGoal] = useState(0);
    const [toiletGoal, setToiletGoal] = useState(0);



    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit function passed as props with the updated values
        onSubmit(foodGoal, clothingGoal, toiletGoal);
      };
    
      return (
        <div>

            <div>
                <h1>Incoming Donations Page</h1>
            </div>

            <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Edit Food Goal
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
                Edit Food Goal
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
                Edit Food Goal
                <input
                  type="number"
                  value={toiletGoal}
                  onChange={(e) => setToiletGoal(parseInt(e.target.value, 10))}
                />
              </label>
            </div>
          </form>

          </div>

          <button type="submit">Submit</button>

        </div>

      );
}

export default EditGoalsPage;

