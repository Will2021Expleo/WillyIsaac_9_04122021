import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profil from "../pages/Profile";
import Homepage from "../pages/Homepage";

import logo from "../assets/logo.svg";
import yoga from "../assets/yoga.svg";
import bicycle from "../assets/bicycle.svg";
import bodybuilding from "../assets/bodybuilding.svg";
import swim from "../assets/swim.svg";

const Navbox = () => {
  return (
    <nav>
      <div className="navbox__top">
        <div className="navbox__top__logo">
          <img src={logo} alt="" />
        </div>
        <nav className="navbox__top__menu">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
            <li>
              <Link to="/setting">Réglage</Link>
            </li>
            <li>
              <Link to="/community">Communeauté</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbox__left">
        <div className="navbox__left__icone">
          <img src={yoga} alt="yoga" />
          <img src={swim} alt="swim" />
          <img src={bicycle} alt="bicycle" />
          <img src={bodybuilding} alt="body-building" />
        </div>
      </div>
    </nav>
  );
};

export default Navbox;
