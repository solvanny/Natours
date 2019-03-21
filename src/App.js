import React, { Component } from "react";
import logoWhite from "./img/logo-white.png";
import nat1 from "./img/nat-1-large.jpg";
import nat2 from "./img/nat-2-large.jpg";
import nat3 from "./img/nat-3-large.jpg";

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
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Exciting tours for adventurous people
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae aliquam, facere doloribus amet repellat explicabo esse
                  ipsam ratione provident obcaecati aspernatur totam ut expedita
                  cumque molestias recusandae neque saepe dignissimos?
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live adventure like you never have before
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae aliquam, facere doloribus amet repellat explicabo esse.
                </p>
                <a href="#" className="btn-text">
                  Learn more &rarr;
                </a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={nat1}
                    alt=""
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src={nat2}
                    alt=""
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src={nat3}
                    alt=""
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world" />
                  <h3 className="heading-tertiary">Explore the world</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio molestias eveniet perferendis.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass" />
                  <h3 className="heading-tertiary">Meet nature</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio molestias eveniet perferendis.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map" />
                  <h3 className="heading-tertiary">Find your way</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio molestias eveniet perferendis.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart" />
                  <h3 className="heading-tertiary">Live a healthier life</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio molestias eveniet perferendis.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Most popular tours</h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1" />
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">
                        The sea explorer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficult: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>

                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2" />
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">
                        The forest hiker
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>7 day tour</li>
                        <li>Up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficult: medium</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$497</p>
                      </div>

                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3" />
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        The snow adventurer
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficult: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$897</p>
                      </div>

                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">
                Discover all tours
              </a>
            </div>
          </section>
        </main>
        {/* <section className="grid-test">
          <div className="row">
            <div className="col-1-of-2">Col 1 of 2</div>
            <div className="col-1-of-2">Col 1 of 2</div>
          </div>

          <div className="row">
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-1-of-3">Col 1 of 3</div>
          </div>

          <div className="row">
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-2-of-3">Col 2 of 3</div>
          </div>

          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
          </div>

          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-2-of-4">Col 2 of 4</div>
          </div>

          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-3-of-4">Col 3 of 4</div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default App;
