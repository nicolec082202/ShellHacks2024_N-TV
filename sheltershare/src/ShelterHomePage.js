import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import ProgressBar from './ProgressBar';


function ShelterHomePage(){

const navigate = useNavigate(); // Call useNavigate


return(

    <div>

        <div>

        <Button
          text="Request Items"
          onClick={() => navigate('/RequestItems')} // Use navigate to go to /about
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