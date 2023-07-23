import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function LoginForm() {

  const api_url = process.env.REACT_APP_ENDPOINT_URL;
    
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
   const navigate = useNavigate();

  const handleSubmit = (event) => {
      event.preventDefault();
      const payload = {
        user_id: userID,
        password: password
      };
  
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      // Make the POST request
      // axios.post('http://localhost:3000/api/login', JSON.stringify(payload), config)
      axios.post(api_url+'/login', JSON.stringify(payload), config)
        .then(function (response) {
          // handle success
          const token = response.data.token
          //console.log(userID);
          setShowA(true); //show success toast
          localStorage.setItem('token', token);
          localStorage.setItem('userid', userID);
          setTimeout(function() {
            setShowA(false); // hide toast after 2 seconds
            navigate('/');
          }, 2000);
        })
        .catch(function (error) {
          // handle error
          setShowB(true)
          setTimeout(function() {
            setShowB(false); // hide toast after 2 seconds
          }, 2500);
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }

  return (
    <Container className="border rounded pt-4 pb-4">
       {/* Toasts for sucess */}
      <ToastContainer position="top-center" >
          <Toast show={showA} bg="success" onClose={toggleShowA}>
            <Toast.Header >
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto ">Success!</strong>
              <small></small>
            </Toast.Header>
            <Toast.Body className={'success text-white'}>Logging you in...</Toast.Body>
          </Toast>
      </ToastContainer>

      {/* Toasts for error */}
      <ToastContainer position="top-center" >
          <Toast show={showB} bg="danger" onClose={toggleShowB}>
            <Toast.Header >
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto ">Error</strong>
              <small></small>
            </Toast.Header>
            <Toast.Body className={'danger text-white'}>Something went wrong.</Toast.Body>
          </Toast>
      </ToastContainer>

      <h4>Login</h4>
      <p className="fs-6 bg-secondary text-white">For a quick demo of the application: <br/> user_id : `2` <br/> password:`weight-demo` </p>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="number" placeholder="Enter User ID" value={userID} onChange={(e)=>{setUserID(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>
        <Container className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Login
            </Button>
        </Container>

      </Form>
    </Container>

  );
}