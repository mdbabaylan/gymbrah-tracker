import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WeightInput from './WeightInput';
import GymBrahNavBar from './Gymbrahnavbar';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function App() {
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
    <Container>
      <Row xs={12}>
        <br></br><br></br>
      </Row>
      <WeightInput/>
    </Container>
    </>

  );
}

export default App;
