import React from "react";
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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G", //Page should be month X
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function WeightChart() {
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
