import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";


export default function LoginForm() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
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
      axios.post('http://localhost:3000/api/login', JSON.stringify(payload), config)
        .then(function (response) {
          // handle success
          const token = response.data.token
          console.log(userID);
          localStorage.setItem('token', token);
          localStorage.setItem('userid', userID);
          navigate('/');
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Control type="text" placeholder="For demo purposes, use user_id `2` and `weight-track-demo` as the password" readOnly />
        <Form.Group className="mb-3">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="number" placeholder="Enter User ID" value={userID} onChange={(e)=>{setUserID(e.target.value)}}/>
          <Form.Text className="text-muted">
            We'll never share your user id with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>

  );
}