import React from "react";

const FeauturesColumn = ({ title, text, icon }) => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={icon} />
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box__text">{text}</p>
      </div>
    </div>
  );
};

export default FeauturesColumn;
