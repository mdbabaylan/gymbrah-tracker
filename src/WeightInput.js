import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
//require('dotenv').config();

export default function WeightInput() {
  const api_url = process.env.REACT_APP_ENDPOINT_URL;

  const getFormattedDate= () => {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const [weight, setWeight] = useState(0);
  
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const userID = localStorage.getItem('userid');
  

  const postWeightData = () => {
    // Create a JSON payload
    // "date": "2023-07-06",
    // "user_id": 1,
    // "weight": 186.5
    const payload = {
      date: getFormattedDate(),
      user_id: userID,
      weight:  weight
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Make the POST request
    axios.post(api_url+'/post', JSON.stringify(payload), config)
      .then(response => {
        console.log(response.data);
        setShowA(true); //show success toast
        setTimeout(function() {
          setShowA(false); // hide toast after 2 seconds
        }, 2000);
        setWeight(0);
      })
      .catch(error => {
        setShowB(true)
        setTimeout(function() {
          setShowB(false); // hide toast after 2 seconds
        }, 2500);
        console.log(error);
        console.error(error);
        
      });
  };

  // onChange={(e)=>{setWeight(e.value)}}/>
  return (
    <Form as={"Container"}>
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
            <Toast.Body className={'success text-white'}>Weight logged!</Toast.Body>
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

        <Form.Label>Enter your weight</Form.Label>
        <Form.Control type="number" className="mb-3" placeholder="Enter weight (lbs)" value={weight} onChange={(e)=>{setWeight(e.target.valueAsNumber)}}/>
        <Form.Text className="text-muted">
          "Can't measure it, can't manage it." ~Edwards Deming
        </Form.Text>

        {/* mb-3 == bootstrap spacing, marginBottom 3 */}
        <div className="text-center mt-3">
            <Button variant="primary" type="submit" onClick={()=>{postWeightData()}}>Enter</Button>
        </div>


    </Form>


  );
}