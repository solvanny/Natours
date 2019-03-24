import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ link, num, title }) => {
  return (
    <li className="navigation__item">
      <Link to={link} className="navigation__link">
        <span>{num}</span>
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
