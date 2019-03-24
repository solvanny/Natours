import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const {
    title,
    li,
    classPicture,
    classHeading,
    classCardSide,
    price,
    value,
    link,
    linkName
  } = props;

  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={classPicture}>&nbsp;</div>
          <h4 className="card__heading">
            <span className={classHeading}>{title}</span>
          </h4>
          <div className="card__details">
            <ul>
              {li.map(li => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classCardSide}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">{price}</p>
              <p className="card__price-value">${value}</p>
            </div>

            <Link to={link} className="btn btn--white">
              {linkName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
