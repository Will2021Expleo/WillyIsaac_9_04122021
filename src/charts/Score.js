import React, { Component } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [{ name: "Group A", value: 400 }];

class Score extends Component {
  render() {
    return (
      <div className="score-charts">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            startAngle={210}
            endAngle={60}
            innerRadius={70}
            outerRadius={80}
            fill="#FF0000"
            paddingAngle={5}
            dataKey="value"
          />
        </PieChart>
      </div>
    );
  }
}

export default Score;
