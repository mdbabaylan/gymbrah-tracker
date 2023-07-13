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

export default function WeightChart() {
  const [weightData, setWeightData] = useState([]);
  const userID = localStorage.getItem('userid');
  
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


  //all, weekly, monthly, yearly (to reduce load, config in backend)
  const getWeightData = () => {
    axios.get('http://localhost:3000/api/getAll/'+userID)
      .then(function (response) {
        // handle success
        //console.log(response.data);
        setWeightData(response.data)
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always exe cuted
      });
  }

  return (
    <Container className="m-0">
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
