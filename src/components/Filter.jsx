import React from "react";

function Filter({ showGreasedOnly, onGreasedChange, sortBy, onSortChange }) {
  return (
    <div className="filterWrapper">
      <div className="ui checkbox">
        <input
          id="greased"
          type="checkbox"
          checked={showGreasedOnly}
          onChange={(e) => onGreasedChange(e.target.checked)}
        />
        <label htmlFor="greased">Greased Pigs Only?</label>
      </div>
      <div className="ui selection dropdown" style={{ marginLeft: "20px" }}>
        <label htmlFor="sort-by">Sort by:</label>
        <select id="sort-by" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="all">Select...</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
