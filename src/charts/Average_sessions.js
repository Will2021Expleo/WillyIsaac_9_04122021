import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AverageSessions = () => {
  const data = [
    { name: "L", duration: 65 },
    { name: "M", duration: 69 },
    { name: "M", duration: 85 },
    { name: "J", duration: 80 },
    { name: "V", duration: 65 },
    { name: "S", duration: 95 },
    { name: "D", duration: 60 },
  ];

  return (
    <div className="average-sessions-charts">
      <p className="average-sessions-charts__title">
        Durée moyenne des sessions
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={800} data={data}>
          <Line
            type="monotone"
            dataKey="duration"
            stroke="#FFFFFF"
            strokeWidth={1}
          />
          <XAxis dataKey="name" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;
