import React from "react";

import SectionAbout from "./about/SectionAbout";
import SectionFeatures from "./features/SectionFeatures";
import SectionTours from "./tours/SectionTours";
import SectionStories from "./SectionStories";
import SectionBook from "./SectionBook";

const Main = () => {
  return (
    <React.Fragment>
      <SectionAbout />
      <SectionFeatures />
      <SectionTours />
      <SectionStories />
      <SectionBook />
    </React.Fragment>
  );
};

export default Main;
