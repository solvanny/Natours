import React, { Component } from "react";
import logoWhite from "./img/logo-white.png";
import nat1 from "./img/nat-1-large.jpg";
import nat2 from "./img/nat-2-large.jpg";
import nat3 from "./img/nat-3-large.jpg";

import nat8 from "./img/nat-8.jpg";
import nat9 from "./img/nat-9.jpg";

import video_mp4 from "./img/video.mp4";
import video_webm from "./img/video.webm";

import logoGreen from "./img/logo-green-2x.png";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>01</span>About Natours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>02</span>Your benefits
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>03</span>Popular tours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>04</span>Stories
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>05</span>Book now
                </a>
              </li>
            </ul>
          </nav>
        </div>
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

          <section className="section-stories">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={video_mp4} type="video/mp4" />
                <source src={video_webm} type="video/mp4" />
                Your browser is not suported!
              </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                We make people genuinely happy
              </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={nat8}
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    I had the best week ever with my family
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse, dolorem nam natus quisquam soluta id corporis quasi
                    enim laboriosam blanditiis ipsam vero suscipit consequatur?
                    Obcaecati pariatur ipsam mollitia unde saepe. Obcaecati
                    pariatur ipsam mollitia unde saepe.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={nat9}
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">
                    Jack Wilson
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    WOW! My life is completely different now
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse, dolorem nam natus quisquam soluta id corporis quasi
                    enim laboriosam blanditiis ipsam vero suscipit consequatur?
                    Obcaecati pariatur ipsam mollitia unde saepe. Obcaecati
                    pariatur ipsam mollitia unde saepe.
                  </p>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn-text">
                Read all stories &rarr;
              </a>
            </div>
          </section>

          <section className="section-book">
            <div className="row">
              <div className="book">
                <div className="book__form">
                  <form action="#" className="form">
                    <div className="u-center-text u-margin-bottom-medium">
                      <h2 className="heading-secondary">Start booking now</h2>
                    </div>
                    <div className="form__group" />
                    <input
                      type="text"
                      id="name"
                      className="form__input"
                      placeholder="Full Name"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                    <div className="form__group">
                      <input
                        type="email"
                        id="email"
                        className="form__input"
                        placeholder="Email address"
                        required
                      />
                      <label htmlFor="email" className="form__label">
                        Email address
                      </label>
                    </div>

                    <div className="form__group u-margin-bottom-medium">
                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="small"
                          name="size"
                        />
                        <label htmlFor="small" className="form__radio-label">
                          <span className="form__radio-button" />
                          Small tour group
                        </label>
                      </div>
                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="large"
                          name="size"
                        />
                        <label htmlFor="large" className="form__radio-label">
                          <span className="form__radio-button" />
                          Large tour group
                        </label>
                      </div>
                      <div className="form__group">
                        <button className="btn btn--green">
                          Next step &rarr;
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer__logo-box">
            <img src={logoGreen} alt="Full logo" className="footer__logo" />
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Contact us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Carrers
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Privacy policy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built from&nbsp;
                <a href="#" className="footer__link">
                  Ion Soltan &nbsp;
                </a>
                Copyright &copy; by Ion Soltan. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Veniam dignissimos distinctio
                tenetur ad voluptatibus vel earum facere quos accusamus corrupti
                eum et sed porro rerum possimus, ipsam, harum debitis itaque.
              </p>
            </div>
          </div>
        </footer>
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
