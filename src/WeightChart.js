import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import Spinners from "./Spinners";
import { useNavigate } from 'react-router-dom';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function WeightChart() {
  const api_url = process.env.REACT_APP_ENDPOINT_URL;
  const [weightData, setWeightData] = useState([]);
  const userID = localStorage.getItem('userid');
  const [showB, setShowB] = useState(false);
  const toggleShowB = () => setShowB(!showB);
  
  const navigate = useNavigate();

  useEffect(() => {

    //check if user is authenticated
    if (localStorage.getItem('token')) {
      console.log('Token exists');
    } else {
      console.log('Token does not exist');
      navigate('/login');
    }

    // This code will only run once, when the component mounts.
    getWeightData();
  }, []);

  useEffect(() => {
    // Re-render chart when api call finishes
  }, [weightData]);


  const instance = axios.create({
    baseURL: api_url,
    https: false,
  });

  //all, weekly, monthly, yearly (to reduce load, config in backend)
  const getWeightData = () => {
    instance.get('/getAll/'+userID)
      .then(function (response) {
        // handle success
        setWeightData(response.data)
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setShowB(true)
        setTimeout(function() {
          setShowB(false); // hide toast after 2 seconds
        }, 2500);
        console.log(error);
      })
      .finally(function () {
        // always exe cuted
      });
  }

  return (
    <Container className="m-0">
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
        {/* <Row xs={12}> */}
        <br></br>
        <h4>Weight Chart in LBS</h4>

        {weightData ? (<ResponsiveContainer width={"100%"} height={400}>
            <AreaChart data={weightData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              {/* <ReferenceLine x="Page C" stroke="green" label="Min PAGE" /> */}
              <ReferenceLine y={4000} label="Weight when I was skinny fat" stroke="red" strokeDasharray="3 3" />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>) : (<Spinners/>)}

        {/* Daily weight chart, prepare seperate object for weekly, monthly, yearly chart */}

        {/* </Row> */}
    </Container>    
  );
}
