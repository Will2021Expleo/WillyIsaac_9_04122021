import React from "react";
import Welcome from "../components/Welcome";
import DailyActivity from "../charts/Daily_activity";
import FooterCharts from "../charts/Footer_charts";

import PersonalData from "../charts/Personal_data";

const Homepage = () => {
  return (
    <div className="homepage">
      <Welcome />

      <div className="homepage__statistics-box">
        <div className="homepage__statistics-box__central">
          <DailyActivity />
          <FooterCharts />
        </div>
        {/* <div className="homepage__statistics-box__right"> */}
        <PersonalData />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Homepage;
