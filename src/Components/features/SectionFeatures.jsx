import React, { Component } from "react";
import FeauturesColumn from "./FeauturesColumn";

class SectionFeatures extends Component {
  render() {
    const feuturesData = [
      {
        title: "Explore the world",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias eveniet perferendis.",
        icon: "feature-box__icon icon-basic-world"
      },
      {
        title: " Meet nature",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias eveniet perferendis.",
        icon: "feature-box__icon icon-basic-compass"
      },
      {
        title: "Find your way",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias eveniet perferendis.",
        icon: "feature-box__icon icon-basic-map"
      },
      {
        title: " Live a healthier life",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias eveniet perferendis.",
        icon: "feature-box__icon icon-basic-heart"
      }
    ];

    return (
      <section className="section-features">
        <div className="row">
          {feuturesData.map(col => (
            <FeauturesColumn
              key={col.title}
              text={col.text}
              title={col.title}
              icon={col.icon}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SectionFeatures;
