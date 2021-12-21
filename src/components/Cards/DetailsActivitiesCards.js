import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AverageSessionsChart from "../charts/AverageSessionsChart";
import PerformanceChart from "../charts/PerformanceChart";
import ScoreChart from "../charts/ScoreChart";

import { fetchPersonalData } from "../../api/sportseeApi";

const DetailsActivitiesCards = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const personalData = async () => {
      let newPersonalData = await fetchPersonalData(id);
      console.log(newPersonalData);
      if (newPersonalData === false) {
        setError(true);
      } else {
        setData(newPersonalData);
      }
    };
    personalData();
  }, [id]);

  if (error === false) {
    return (
      <div className="details-activity-charts">
        <AverageSessionsChart />

        <PerformanceChart />

        <ScoreChart data={data} />
      </div>
    );
  } else {
    return null;
  }
};

export default DetailsActivitiesCards;
