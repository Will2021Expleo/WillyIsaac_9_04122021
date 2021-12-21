import React from "react";
import calories from "../../assets/calories-icon.svg";
import protein from "../../assets/protein-icon.svg";
import glucid from "../../assets/glucid-icon.svg";
import lipid from "../../assets/lipid-icon.svg";

import CountUp from "react-countup";

const PersonalDataCard = ({
  data: { calorieCount, carbohydrateCount, lipidCount, proteinCount },
}) => {
  // console.log(calorieCount);
  if (!calorieCount) {
    return "...";
  }
  return (
    <div className="personal-data">
      <div className="container">
        <img src={calories} alt="" />
        <div className="container__details">
          <p className="container__qty">
            <CountUp start={0} end={calorieCount} separator="," suffix="kCal" />
          </p>
          <p className="container__item__tile">Calories</p>
        </div>
      </div>
      <div className="container">
        <img src={protein} alt="" />
        <div className="container__details">
          <p className="container__qty" separator=",">
            <CountUp start={0} end={proteinCount} separator="," suffix="g" />
          </p>
          <p className="container__item__tile">Proteines</p>
        </div>
      </div>
      <div className="container">
        <img src={glucid} alt="" />
        <div className="container__details">
          <p className="container__qty">
            <CountUp
              start={0}
              end={carbohydrateCount}
              separator=","
              suffix="g"
            />
          </p>
          <p className="container__item__tile">Glucides</p>
        </div>
      </div>
      <div className="container">
        <img src={lipid} alt="" />
        <div className="container__details">
          <p className="container__qty">
            <CountUp start={0} end={lipidCount} separator="," suffix="g" />
          </p>
          <p className="container__item__tile">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDataCard;
