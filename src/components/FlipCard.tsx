import React, { useState } from "react";

interface FlipCardProps {
  id: string;
  frontDiv: JSX.Element;
  backDiv: JSX.Element;
}

const FlipCard: React.FC<FlipCardProps> = ({ id, frontDiv, backDiv }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipPreview, setFlipPreview] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div className={`flip-container ${isFlipped ? "flipped" : ""}`}>
      <div
        id={id}
        className={`card flipper front ${flipPreview ? "flip-preview" : ""}`}
        onClick={() => handleFlip()}
        onMouseEnter={() => setFlipPreview(true)}
        onMouseLeave={() => setFlipPreview(false)}
      >
        {frontDiv}
      </div>

      <div
        className={`card flipper back ${flipPreview ? "flip-preview" : ""}`}
        onClick={() => handleFlip()}
        onMouseOver={() => setFlipPreview(true)}
        onMouseLeave={() => setFlipPreview(false)}
      >
        {backDiv}
      </div>
    </div>
  );
};

export default FlipCard;
