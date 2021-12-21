import React from "react";

const HeaderCard = ({ data: { firstName } }) => {
  // console.log(firstName);
  if (!firstName) {
    return "...";
  }

  return (
    <div className="header">
      <h1>
        Bonjour <span className="header__name">{firstName}</span>
      </h1>
      <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default HeaderCard;
