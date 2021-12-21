import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DailyActivityChart from "../components/charts/DailyActivityChart";
import HeaderCard from "../components/Cards/HeaderCard";
import PersonalDataCard from "../components/Cards/PersonalDataCard";
import DetailsActivitiesCards from "../components/Cards/DetailsActivitiesCards";

import Errorpage from "../components/Errorpage";

import { fetchPersonalData } from "../api/sportseeApi";

//faire l'appel API pour gérer la page d'erreur

const Homepage = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const personalCardInfo = async () => {
      let newPersonalCardInfo = await fetchPersonalData(id);
      console.log(newPersonalCardInfo);
      if (newPersonalCardInfo === false) {
        setError(true);
      } else {
        setData(newPersonalCardInfo);
      }
    };

    personalCardInfo();
  }, [id]);

  // Récupération de l'ensemble des données personnelles
  // async componentDidMount() {
  //   const fetchedPersonalData = await fetchPersonalData(this.id);
  //   this.setState({ data: fetchedPersonalData });

  //   console.log(fetchedPersonalData);
  // }

  // if (data === true) {
  if (error === false) {
    return (
      <div className="homepage">
        <HeaderCard data={data} />

        <div className="homepage__statistics-box">
          <div className="homepage__statistics-box__central">
            <DailyActivityChart />

            <DetailsActivitiesCards />
          </div>

          <PersonalDataCard data={data} />
        </div>
      </div>
    );
  } else {
    return <Errorpage />;
  }
};

export default Homepage;
