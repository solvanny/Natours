import React from "react";
import { Link } from "react-router-dom";

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
