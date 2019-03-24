import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    link: "#",
    num: "01",
    title: "About Natours"
  },
  {
    link: "#",
    num: "02",
    title: "Your benefits"
  },
  {
    link: "#",
    num: "03",
    title: "Popular tours"
  },
  {
    link: "#",
    num: "04",
    title: "Stories"
  },
  {
    link: "#",
    num: "05",
    title: "Book now"
  }
];

const Nav = () => {
  return (
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
          {navLinks.map(link => (
            <NavLink
              key={link.num}
              link={link.link}
              num={link.num}
              title={link.title}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
