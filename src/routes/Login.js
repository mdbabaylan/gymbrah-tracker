import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import LoginForm from '../LoginForm';



export default function Login() {
//   const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    // This code will only run once, when the component mounts.
  }, []);


  return (
    <Container className="d-flex align-items-center vh-100">
        <LoginForm/>
    </Container>    
  );
}
