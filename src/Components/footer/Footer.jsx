import React from "react";
import { Link } from "react-router-dom";

import FooterLink from "./FooterLink";

import logoGreen2 from "../../img/logo-green-2x.png";
import logoGreen1 from "../../img/logo-green-1x.png";

import logoSmallGreen2 from "../../img/logo-green-small-2x.png";
import logoSmallGreen1 from "../../img/logo-green-small-1x.png";

const link = [
  {
    link: "#",
    title: "Company"
  },
  {
    link: "#",
    title: "Contact us"
  },
  {
    link: "#",
    title: "Carrers"
  },
  {
    link: "#",
    title: "Privacy policy"
  },
  {
    link: "#",
    title: "Terms"
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${logoSmallGreen1} 1x, ${logoSmallGreen2} 2x`}
            media="(max-width: 37.5em)"
          />
          <img srcSet={`${logoGreen1} 1x, ${logoGreen2} 2x`} alt="Full logo" />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              {link.map(link => (
                <FooterLink
                  key={link.title}
                  link={link.link}
                  title={link.title}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built from&nbsp;
            <Link to="#" className="footer__link">
              Ion Soltan &nbsp;
            </Link>
            Copyright &copy; by Ion Soltan. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam dignissimos distinctio tenetur
            ad voluptatibus vel earum facere quos accusamus corrupti eum et sed
            porro rerum possimus, ipsam, harum debitis itaque.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
