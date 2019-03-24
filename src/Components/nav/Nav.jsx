import React, { Component } from "react";
import NavLink from "./NavLink";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      checked: null
    };
  }

  handleChange(e) {
    this.setState({ checked: e.target.checked });
  }

  render() {
    const navLinks = [
      {
        link: "#about",
        num: "01",
        title: "About Natours"
      },
      {
        link: "#features",
        num: "02",
        title: "Your benefits"
      },
      {
        link: "#tours",
        num: "03",
        title: "Popular tours"
      },
      {
        link: "#stories",
        num: "04",
        title: "Stories"
      },
      {
        link: "#book",
        num: "05",
        title: "Book now"
      }
    ];
    let chenged = this.state.chenged;
    return (
      <div className="navigation">
        <input
          checked={this.state.checked}
          onChange={this.handleChange.bind(this)}
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
                handleClick={() => this.setState({ checked: false })}
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
  }
}

export default Nav;
