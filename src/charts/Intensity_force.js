import React, { Component } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Layer,
} from "recharts";

const data = [
  { subject: "Intensité", A: 120, fullMark: 150 },
  { subject: "Vitesse", A: 98, fullMark: 150 },
  { subject: "Force", A: 86, fullMark: 150 },
  { subject: "Endurance", A: 99, fullMark: 150 },
  { subject: "Energie", A: 85, fullMark: 150 },
  { subject: "Cardio", A: 65, fullMark: 150 },
];

class IntensityForce extends Component {
  render() {
    return (
      <div className="intensity-charts">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Layer style={{ color: "#FFF" }} />
            <Radar
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default IntensityForce;

//  <RadarChart data={data}>
//    <PolarGrid />
//    <PolarAngleAxis dataKey="subject" />

//    <Radar dataKey="A" fill="#FF0101" fillOpacity={0.6} />
//  </RadarChart>;
