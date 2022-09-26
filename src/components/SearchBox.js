import React from "react";
import PropTypes from "prop-types";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="Type to search..."
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchBox;
