import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import video_mp4 from "../img/video.mp4";
import video_webm from "../img/video.webm";

import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";

const SectionStories = () => {
  return (
    <section className="section-stories" id="stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video_mp4} type="video/mp4" />
          <source src={video_webm} type="video/mp4" />
          Your browser is not suported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat8} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              dolorem nam natus quisquam soluta id corporis quasi enim
              laboriosam blanditiis ipsam vero suscipit consequatur? Obcaecati
              pariatur ipsam mollitia unde saepe. Obcaecati pariatur ipsam
              mollitia unde saepe.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat9} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              dolorem nam natus quisquam soluta id corporis quasi enim
              laboriosam blanditiis ipsam vero suscipit consequatur? Obcaecati
              pariatur ipsam mollitia unde saepe. Obcaecati pariatur ipsam
              mollitia unde saepe.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <Link to="#" className="btn-text">
          Read all stories &rarr;
        </Link>
      </div>
    </section>
  );
};

export default SectionStories;
