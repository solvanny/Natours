import React from "react";
import { Link } from "react-router-dom";
import Card from "./Cards";

const cards = [
  {
    title: "The sea explorer",
    li: [
      "3 day tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficult: easy"
    ],
    classPicture: "card__picture card__picture--1",
    classHeading: "card__heading-span card__heading-span--1",
    classCardSide: "card__side card__side--back card__side--back-1",
    price: "Only",
    value: 297,
    link: "#popup",
    linkName: "Book now!"
  },
  {
    title: "The forest hiker",
    li: [
      "7 day tours",
      "Up to 40 people",
      "6 tour guides",
      "Sleep in provided tents",
      "Difficult: medium"
    ],
    classPicture: "card__picture card__picture--2",
    classHeading: "card__heading-span card__heading-span--2",
    classCardSide: "card__side card__side--back card__side--back-2",
    price: "Only",
    value: 497,
    link: "#popup",
    linkName: "Book now!"
  },
  {
    title: " The sea explorer",
    li: [
      "5 day tours",
      "Up to 15 people",
      "3 tour guides",
      "Sleep in cozy hotels",
      "Difficult: hard"
    ],
    classPicture: "card__picture card__picture--3",
    classHeading: "card__heading-span card__heading-span--3",
    classCardSide: "card__side card__side--back card__side--back-3",
    price: "Only",
    value: 897,
    link: "#popup",
    linkName: "Book now!"
  }
];

const SectionTours = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        {cards.map(card => (
          <Card
            key={card.title}
            title={card.title}
            li={card.li}
            classPicture={card.classPicture}
            classHeading={card.classHeading}
            classCardSide={card.classCardSide}
            price={card.price}
            value={card.value}
            link={card.link}
            linkName={card.linkName}
          />
        ))}
      </div>

      <div className="u-center-text u-margin-top-huge">
        <Link to="#" className="btn btn--green">
          Discover all tours
        </Link>
      </div>
    </section>
  );
};

export default SectionTours;
