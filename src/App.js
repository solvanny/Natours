import React, { Component } from "react";

import Header from "./Components/Header";
import Nav from "./Components/nav/Nav";
import Main from "./Components/Main";
import Footer from "./Components/footer/Footer";
import Popup from "./Components/Popup";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <Main />
        <Footer />
        <Popup />
      </React.Fragment>
    );
  }
}

export default App;
