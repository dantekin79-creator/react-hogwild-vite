import React, { useState } from "react";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  if (isHidden) return null;

  const { name, image, specialty, weight, greased, "highest medal achieved": medal } = hog;

  return (
    <div 
      aria-label="hog card" 
      className="ui card" 
      onClick={() => setShowDetails(!showDetails)}
      style={{ cursor: "pointer" }}
    >
      <div className="image">
        <img src={image} alt={`Photo of ${name}`} />
      </div>
      <div className="content">
        <h3 className="header">{name}</h3>
        {showDetails && (
          <div className="description">
            <p>Specialty: {specialty}</p>
            <p>{weight}</p>
            <p>{greased ? "Greased" : "Nongreased"}</p>
            <p>{medal}</p>
          </div>
        )}
      </div>
      <div className="extra content">
        <button 
          className="ui button" 
          onClick={(e) => {
            e.stopPropagation();
            setIsHidden(true);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;
