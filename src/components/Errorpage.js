import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <div className="errorpage__container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/">
        <h4 className="error__link">Retourner à la page d'accueil</h4>
      </Link>
    </div>
  );
};

export default Errorpage;
