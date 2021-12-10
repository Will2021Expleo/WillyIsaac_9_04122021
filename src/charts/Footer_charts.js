import React, { Component } from "react";
import AverageSessions from "./Average_sessions";
import IntensityForce from "./Intensity_force";
import Score from "./Score";

class FooterCharts extends Component {
  render() {
    return (
      <div className="footer-charts">
        <AverageSessions />

        <IntensityForce />

        <Score />
      </div>
    );
  }
}

export default FooterCharts;
