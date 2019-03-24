import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const FooterLink = ({ link, title }) => {
  return (
    <li className="footer__item">
      <Link to={link} className="footer__link">
        {title}
      </Link>
    </li>
  );
};

export default FooterLink;
