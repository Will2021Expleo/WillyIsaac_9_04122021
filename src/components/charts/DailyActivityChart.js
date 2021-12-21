import React, { useState, useEffect } from "react";
import { fetchDailyActivity } from "../../api/sportseeApi";
import { useParams } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DailyActivityChart = () => {
  const [dailyActivitysessions, setDailyActivitySessions] = useState([]);

  const [error, setError] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchActivityData = async () => {
      let newSessions = await fetchDailyActivity(id);
      // console.log(newSessions);
      if (newSessions === false) {
        setError(true);
      } else {
        setDailyActivitySessions(newSessions);
      }
    };

    fetchActivityData();
  }, [id]);

  const formatXAxis = (tickItem) => {
    if (typeof tickItem === "string") {
      // console.log(tickItem)
      return tickItem.substring(tickItem.length - 1, tickItem.length);
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-BarChart">
          <p className="label1">{`${payload[0].value}`}Kg</p>
          <p className="label2">{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }
    return null;
  };

  const updateLegend = (legend) => {
    if (legend === "kilogram") {
      legend = "Poids (kg)";
    } else {
      legend = "Calories brûlées (KCal)";
    }
    // legend = legend === "kilogram" ? "Poids (kg)" : "Calories brûlées (KCal)"
    return <span className="text-legend">{legend}</span>;
  };

  if (error === false) {
    return (
      <div className="homepage__daily-card">
        <div className="daily-activity-charts">
          {/* <p>Graphique test</p> */}
          <div className="daily-activity-charts">
            <div className="daily-activity-charts__display">
              <h4>Activité quotidienne</h4>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width="100%"
                height="100%"
                data={dailyActivitysessions} //données du graphique
                barSize={5} //permet de dimmensionner la largeur des barres
                margin={{
                  top: 5,
                  right: 30,
                  left: 30,
                  bottom: 10,
                }}
              >
                <CartesianGrid
                  // horizontal={true}
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  tickMargin={5}
                  tickLine={false}
                  tickFormatter={formatXAxis} //remplace la date par des numéros
                  stroke="#9B9EAC"
                  // angle={-45}
                />
                <YAxis
                  // domain={[0, "dataMax + 5"]}
                  tickCount={3}
                  dataKey="calories"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={5}
                  stroke="#9B9EAC"
                />
                <Tooltip content={CustomTooltip} />
                <Legend
                  verticalAlign="top"
                  align="right"
                  iconType="circle"
                  formatter={updateLegend}
                  wrapperStyle={{ paddingBottom: 40, paddingTop: 20 }}
                />
                {/* <ReferenceLine y={0} stroke="#000" /> */}
                {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                <Bar
                  dataKey="kilogram"
                  fill="##282D30"
                  radius={[5, 5, 0, 0]}
                  barSize={7}
                />

                <Bar
                  dataKey="calories"
                  fill="#E60000"
                  radius={[5, 5, 0, 0]}
                  barSize={7}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DailyActivityChart;
