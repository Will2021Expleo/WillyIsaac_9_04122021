import React, { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DailyActivity() {
  const sessions = [
    { day: "1", kilogram: 70, calories: 240 },
    { day: "2", kilogram: 69, calories: 220 },
    { day: "3", kilogram: 70, calories: 280 },
    { day: "4", kilogram: 70, calories: 500 },
    { day: "5", kilogram: 69, calories: 160 },
    { day: "6", kilogram: 69, calories: 162 },
    { day: "7", kilogram: 69, calories: 390 },
    { day: "8", kilogram: 60, calories: 60 },
    { day: "9", kilogram: 60, calories: 60 },
    { day: "10", kilogram: 60, calories: 60 },
  ];

  return (
    <div className="homepage__daily-card">
      <div className="daily-activity-charts">
        {/* <p>Graphique test</p> */}
        <div className="daily-activity">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={50}
              height={40}
              data={sessions} //données du graphique
              barSize={5} //permet de dimmensionner la largeur des barres
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid horizontal={true} vertical={false} />
              <XAxis dataKey="day" />
              <YAxis domain={[0, "dataMax + 5"]} tickCount={4} />
              <Tooltip
                wrapperStyle={{ width: 50, backgroundColor: "#E60000" }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                wrapperStyle={{ lineHeight: "40px" }}
              />
              <ReferenceLine y={0} stroke="#000" />
              {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
              <Bar dataKey="kilogram" fill="##282D30" radius={[5, 5, 0, 0]} />
              <Bar dataKey="calories" fill="#E60000" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DailyActivity;

// <CartesianGrid horizontal={true} vertical={false} />
// {/* Affiche les lignes horizontales et les lignes verticales*/}
// <Bar dataKey="poids" fill="#E60000" radius={[5, 5, 0, 0]} />
// {/* Affiche les données liées aux poids et la couleur des barres*/}
// <Bar dataKey="calories" fill="##282D30" radius={[5, 5, 0, 0]} />
// {/* Affiche les données liées aux calories et la couleur des barres*/}
// {/* <Tooltip cursor={{ fill: "#C4C4C4" }} /> */}
// <XAxis dataKey="name" /> {/* Ajoute le nom sur l'axe X */}
// <YAxis domain={[0, "dataMax + 5"]} tickCount={4} />
// {/* Ajoute l'échelle sur l'axe Y : 0 jusqu'à la valeur la plus élevée + 5, tickCount : intervalles*/}
// <Legend verticalAlign="top" />

// import React, { useState } from "react";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   Brush,
//   ReferenceLine,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// function DailyActivity() {
//   // sessions = [
//   //   { day: "1", kilogram: 70, calories: 240 },
//   //   { day: "2", kilogram: 69, calories: 220 },
//   //   { day: "3", kilogram: 70, calories: 280 },
//   //   { day: "4", kilogram: 70, calories: 500 },
//   //   { day: "5", kilogram: 69, calories: 160 },
//   //   { day: "6", kilogram: 69, calories: 162 },
//   //   { day: "7", kilogram: 69, calories: 390 },
//   //   { day: "8", kilogram: 60, calories: 60 },
//   //   { day: "9", kilogram: 60, calories: 60 },
//   //   { day: "10", kilogram: 60., calories: 60 },
//   // ];
//   const [data, setData] = useState([]);

//   return (
//     <div className="homepage__daily-card">
//       <div className="daily-activity-charts">
//         {/* <p>Graphique test</p> */}
//         <div className="daily-activity">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               width={50}
//               height={40}
//               data={data} //données du graphique
//               barSize={5} //permet de dimmensionner la largeur des barres
//               margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//               }}
//             >
//               <CartesianGrid horizontal={true} vertical={false} />
//               <XAxis dataKey="name" />
//               <YAxis domain={[0, "dataMax + 5"]} tickCount={4} />
//               <Tooltip
//                 wrapperStyle={{ width: 50, backgroundColor: "#E60000" }}
//               />
//               <Legend
//                 verticalAlign="top"
//                 align="right"
//                 wrapperStyle={{ lineHeight: "40px" }}
//               />
//               <ReferenceLine y={0} stroke="#000" />
//               {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
//               <Bar dataKey="calories" fill="##282D30" radius={[5, 5, 0, 0]} />
//               <Bar dataKey="poids" fill="#E60000" radius={[5, 5, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DailyActivity;
