import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

import Img from "./Img";

import nat1 from "../../img/nat-1-large.jpg";
import nat2 from "../../img/nat-2-large.jpg";
import nat3 from "../../img/nat-3-large.jpg";

import nat1Small from "../../img/nat-1.jpg";
import nat2Small from "../../img/nat-2.jpg";
import nat3Small from "../../img/nat-3.jpg";

class SectionAbout extends Component {
  render() {
    const imgAbout = [
      {
        srcSet: `${nat1Small} 300w, ${nat1} 1000w`,
        alt: "Image Natura",
        sizes: "(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px",
        src: nat1,
        className: "composition__photo composition__photo--p1"
      },
      {
        srcSet: `${nat2Small} 300w, ${nat2} 1000w`,
        alt: "Image Natura 1",
        sizes: "(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px",
        src: nat2,
        className: "composition__photo composition__photo--p2"
      },
      {
        srcSet: `${nat3Small} 300w, ${nat3} 1000w`,
        alt: "Image Natura 2",
        sizes: "(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px",
        src: nat1,
        className: "composition__photo composition__photo--p3"
      }
    ];
    return (
      <section className="section-about" id="about">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquam, facere doloribus amet repellat explicabo esse ipsam
              ratione provident obcaecati aspernatur totam ut expedita cumque
              molestias recusandae neque saepe dignissimos?
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventure like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquam, facere doloribus amet repellat explicabo esse.
            </p>
            <Link to="#" className="btn-text">
              Learn more &rarr;
            </Link>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              {imgAbout.map(img => (
                <Img
                  key={img.alt}
                  srcSet={img.srcSet}
                  alt={img.alt}
                  sizes={img.sizes}
                  src={img.src}
                  className={img.className}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionAbout;
