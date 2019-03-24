import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={nat8} alt="Tour1" className="popup__img" />
          <img src={nat9} alt="Tour2" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary .u-margin-bottom-smaller">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et
            aperiam distinctio sit. Aspernatur blanditiis non debitis esse minus
            ipsa quia temporibus obcaecati repellat est explicabo ad dolores, a
            perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nobis itaque recusandae, laborum vitae ab impedit eos quos
            modi fugit eius dignissimos debitis accusantium veritatis culpa
            animi. Eum ab natus molestias? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus vitae odio ex consequuntur sint,
            perspiciatis rerum voluptas debitis iure voluptatibus? Minus nisi
            cumque dolorem officiis facilis ab optio praesentium quibusdam.
          </p>
          <Link to="#" className="btn btn--green">
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
