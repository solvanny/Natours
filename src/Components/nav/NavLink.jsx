import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavLink = ({ link, num, title, handleClick }) => {
  return (
    <li className="navigation__item">
      <Link onClick={handleClick} to={link} className="navigation__link">
        <span>{num}</span>
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
