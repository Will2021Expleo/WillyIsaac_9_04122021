import React, { useState, useEffect } from "react";
import { fetchAverageSessions } from "../../api/sportseeApi";
import { useParams } from "react-router-dom";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const AverageSessionsChart = () => {
  const [averageSessions, setAverageSessions] = useState({});
  const [error, setError] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchAverageSessionsData = async () => {
      let newAverageSessions = await fetchAverageSessions(id);
      // console.log(newAverageSessions);
      if (newAverageSessions === false) {
        setError(true);
      } else {
        setAverageSessions(newAverageSessions);
      }
    };
    fetchAverageSessionsData();
  }, [id]);

  const displayDay = (tickItem) => {
    // const for convert number in day
    const day = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };
    return day[tickItem];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-LineChart">
          <p>{`${payload[0].value}`} min</p>
        </div>
      );
    }
    return null;
  };

  if (error === false) {
    return (
      <div className="average-sessions-charts">
        <p className="average-sessions-charts__title">
          Durée moyenne des sessions
        </p>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            width="100%"
            height="100%"
            data={averageSessions}
            margin={{ top: 0, right: 10, left: -50, bottom: 0 }}
          >
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              dot={false}
              strokeWidth={1}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#FFFFFF"
              tickFormatter={displayDay}
            />
            <Tooltip content={CustomTooltip} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return null;
  }
};

export default AverageSessionsChart;

//tickFormatter permet de remplacer les données de base par des données définies
