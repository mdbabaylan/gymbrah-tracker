import WeightChart from '../WeightChart';
import GymBrahNavBar from '../Gymbrahnavbar';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";

function History() {

    //logout if not authenticated
    const navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem('token')) {
          console.log('Token exists');
        } else {
          console.log('Token does not exist');
          navigate('/login');
        }
    }, []);

  return (
    <>
        <GymBrahNavBar/>
        <WeightChart/>
    </>

  );
}

export default History;
