import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export default function WeightInput() {
  
  const getFormattedDate= () => {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const [weight, setWeight] = useState(0);

  const postWeightData = () => {
    // Create a JSON payload
    // "date": "2023-07-06",
    // "user_id": 1,
    // "weight": 186.5
    const payload = {
      date: getFormattedDate(),
      user_id: '1',
      weight: weight
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Make the POST request
    axios.post('http://localhost:3000/api/post', JSON.stringify(payload), config)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // onChange={(e)=>{setWeight(e.value)}}/>
  return (
    <Form as={"Container"}>
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