import React from "react";
import PropTypes from "prop-types";

const MovieHeading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  );
};

MovieHeading.propTypes = {
  heading: PropTypes.string.isRequired
};

export default MovieHeading;
