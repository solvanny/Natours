import React, { Component } from "react";
import logoWhite from "./img/logo-white.png";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header__logo-box">
            <img src={logoWhite} alt="Logo" className="header__logo" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Outdoors</span>
              <span className="heading-primary--sub">
                is where life happens
              </span>
            </h1>

            <a href="#" className="btn btn--white btn--animated">
              Disover our tours
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
