import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import logoWhite from "../img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoWhite} alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <Link to="#tours" className="btn btn--white btn--animated">
          Disover our tours
        </Link>
      </div>
    </header>
  );
};

export default Header;
