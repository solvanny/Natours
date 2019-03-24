import React from "react";

const Img = ({ srcSet, alt, sizes, src, className }) => {
  return (
    <img
      srcSet={srcSet}
      alt={alt}
      sizes={sizes}
      src={src}
      className={className}
    />
  );
};

export default Img;
