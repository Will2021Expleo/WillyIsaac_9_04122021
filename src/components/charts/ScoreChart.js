import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

import { fetchScore } from "../../api/sportseeApi";

const ScoreChart = () => {
  // const data = [
  //   { name: "Group A", value: 0.3 },
  //   { name: "Group B", value: 0.7 },
  //   // { name: "Group C", value: 300 },
  //   // { name: "Group D", value: 200 },
  // ];

  // const COLORS = [
  //   "#FF0000",
  //   "blue",
  //   // "#FFBB28",
  //   //  "#FF8042"
  // ];

  const [smallCircle, setSmallCircle] = useState([]);
  const [error, setError] = useState(false);

  const [scoreActivity, setScoreActivity] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchScoreData = async () => {
      let newScore = await fetchScore(id);
      console.log(newScore);
      if (newScore === false) {
        setError(true);
      } else {
        setScoreActivity(newScore);
      }

      setSmallCircle([
        { value: newScore * 100, fill: "#FF0000" },
        //remainning value to reach 100%
        { value: 100 - newScore * 100, fill: "transparent" },
      ]);
    };
    fetchScoreData();
  }, [id]);

  const FullCircle = [{ value: 100, fill: "#FFFFFF" }];
  if (error === false) {
    return (
      <div className="score-charts">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={200} height={200}>
            <Pie
              data={FullCircle}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              strokeWidth={0}
            />
            <Pie
              data={smallCircle}
              dataKey="value"
              name="A1"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              cornerRadius={10}
              strokeWidth={0}
              startAngle={90}
              endAngle={450}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="score-charts__display">
          <h4>Score</h4>
          <p className="score-charts__display__content">
            <strong>
              {scoreActivity * 100}% <br></br>
            </strong>
            <span> de votre objectif</span>
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ScoreChart;
