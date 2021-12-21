import React, { useState, useEffect } from "react";
import { fetchPerformance } from "../../api/sportseeApi";

import { useParams } from "react-router-dom";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Layer,
} from "recharts";

function PerformanceChart() {
  // const data = [
  //   { subject: "Intensité", value: 120, kind: 1 },
  //   { subject: "Vitesse", value: 98, kind: 2 },
  //   { subject: "Force", value: 86, kind: 3 },
  //   { subject: "Endurance", value: 99, kind: 4 },
  //   { subject: "Energie", value: 85, kind: 5 },
  //   { subject: "Cardio", value: 65, kind: 6 },
  // ];

  //=> newPerformance ou fetchPerformanceKind

  const [performanceData, setPerformanceData] = useState([]);
  const [error, setError] = useState(false);

  const params = useParams();
  const id = params.id;

  //version numéro 1

  useEffect(() => {
    const fetchPerformanceData = async () => {
      let newPerformance = await fetchPerformance(id);
      console.log(newPerformance);
      if (newPerformance === false) {
        setError(true);
      } else {
        setPerformanceData(newPerformance);
      }
    };
    fetchPerformanceData();
  }, [id]);

  const kind = (tickItem) => {
    const typesData = {
      1: "Intensité",
      2: "Vitesse",
      3: "Force",
      4: "Endurance",
      5: "Energie",
      6: "Cardio",
    };
    return typesData[tickItem];
  };

  if (error === false) {
    return (
      <div className="intensity-charts">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="75%"
            data={performanceData}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              stroke="#FFFFFF"
              tickLine={false}
              fontSize={12}
              tickFormatter={kind}
            />

            <PolarRadiusAxis
              domain={[0, 250]}
              axisLine={false}
              tickCount={6}
              tick={false}
            />
            <Layer style={{ color: "#FFF" }} />
            <Radar
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return null;
  }
}

export default PerformanceChart;
