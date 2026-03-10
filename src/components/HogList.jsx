import React, { useState } from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div key={hog.name} className="ui eight wide column">
          <HogCard hog={hog} />
        </div>
      ))}
    </div>
  );
}

export default HogList;
