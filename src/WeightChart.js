import React, { useEffect } from "react";
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
import Row from 'react-bootstrap/Row';
import axios from "axios";

const data = [
  {
    name: "Page A",
    uv: 4000,
    // pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 4000,
    // pv: 2400,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 4000,
    // pv: 2400,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    // pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    // pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    // pv: 3800,
    amt: 2500
  },
  {
    name: "Page G", //Page should be month X
    uv: 3490,
    // pv: 4300,
    amt: 2100
  }
];

//sample data from expressJS api get All

//tweak json properties in front-end (js logic, daily,weektly,monthly, yearly weight differences)
//a bit of modification here wouldn't hurt, and to speed up load times, making the backend lightweight and speedy as it is a free service too

const apiData = 
[
  {
      "_id": "64a56d3fcec2362379a55af1",
      "date": "2023-07-05T00:00:00.000Z",
      "user_id": 1,
      "weight": 185.5,
      "__v": 0
  },
  {
      "_id": "64a655b8c65340a84b4573eb",
      "date": "2023-07-06T00:00:00.000Z",
      "user_id": 1,
      "weight": 186.5,
      "__v": 0
  },
  {
    "_id": "64a56d3fcec2362379a55af1",
    "date": "2023-07-07T00:00:00.000Z",
    "user_id": 1,
    "weight": 186,
    "__v": 0
  },
  {
      "_id": "64a655b8c65340a84b4573eb",
      "date": "2023-07-086T00:00:00.000Z",
      "user_id": 1,
      "weight": 185.5,
      "__v": 0
  }
];

const getWeightData = () => {
  axios.get('http://localhost:3000/api/getAll')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always exe cuted
    });
}

export default function WeightChart() {

  useEffect(() => {
    // This code will only run once, when the component mounts.
    getWeightData();
  }, []);


  return (
    <Container className="m-0">
        {/* <Row xs={12}> */}
        <br></br>
        <h4>Weight Chart</h4>
        <ResponsiveContainer width={"100%"} height={400}>
            <AreaChart data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              {/* <ReferenceLine x="Page C" stroke="green" label="Min PAGE" /> */}
              <ReferenceLine y={4000} label="Weight when I was skinny fat" stroke="red" strokeDasharray="3 3" />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
        {/* </Row> */}
    </Container>    
  );
}
