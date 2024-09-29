import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import ProgressBar from './ProgressBar';


function ShelterHomePage(){

const navigate = useNavigate(); // Call useNavigate


return(

    <div>

      <div>

        <h1>Donations Dashboard</h1>

      </div>

        <div>

        <Button
          text="Edit Goals"
          onClick={() => navigate('/EditGoals')} // Use navigate to go to /about
        />

        <Button
          text="Incoming Donation"
          onClick={() => navigate('/IncomingDonation')} // Use navigate to go to /about
        />  

        </div>

        <p>Food</p>

        <ProgressBar/>

        <div>

        <p>Clothes</p>

        <ProgressBar/>

        <div></div>

        <p>Toiletries</p>

        <ProgressBar/>

        <div></div>


        </div>


    </div>

);

}

export default ShelterHomePage;