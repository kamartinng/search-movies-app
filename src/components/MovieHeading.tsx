import React from "react";

interface MovieHeadingType {
  heading: string;
}

const MovieHeading = ({heading}: MovieHeadingType) => {
  return (
    <div className="col">
      <h1>{heading}</h1>
    </div>
  );
};

export default MovieHeading;
