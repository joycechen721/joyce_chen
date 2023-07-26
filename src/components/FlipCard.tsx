import React, { useState } from "react";

interface FlipCardProps {
    id: string;
    frontDiv: JSX.Element;
    backDiv: JSX.Element;
  }

const FlipCard: React.FC<FlipCardProps> = ({ id, frontDiv, backDiv }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div className={`flip-container ${isFlipped ? "flipped" : ""}`}>
      <div id={id} className={`card flipper front`} onClick={() => handleFlip()}>
        {frontDiv}
      </div>

      <div className="card flipper back" onClick={() => handleFlip()}>
        {backDiv}
      </div>
    </div>
  );
};

export default FlipCard;
