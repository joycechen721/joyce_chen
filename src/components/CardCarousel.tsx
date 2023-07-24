import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  cards: JSX.Element[];
  showNum: number;
}

const CardCarousel: React.FC<CarouselProps> = ({ cards, showNum }) => {
  const numCards: number = cards.length; // total # of cards
  const numToShow: number = showNum > numCards ? numCards : showNum; // # of cards to show at a time

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(numToShow);
  // make the cards go up/down for ~texture~
  const initialCards = useRef<any[]>(
    cards.map((card, index) => (
      <div key={index} className={`card ${index % 2 === 0 ? "bottom" : "top"}`}>
        {card}
      </div>
    ))
  );
  // initial group of cards shown
  const [shownCards, setShownCards] = useState<any[]>(
    initialCards.current.slice(startIndex, endIndex)
  );

  // the ordered group of cards to display
  const groupCards = (): void => {
    if (startIndex > endIndex) {
      const firstHalf = initialCards.current.slice(startIndex);
      const secondHalf = initialCards.current.slice(0, endIndex + 1);
      setShownCards(firstHalf.concat(secondHalf));
    } else {
      setShownCards(initialCards.current.slice(startIndex, endIndex));
    }
  };

  useEffect(() => groupCards(), [startIndex, endIndex]);

  // setting the start/end indices to show the next group of cards
  const goNext = (): void => {
    if (startIndex + 1 === numCards) {
      setStartIndex(0);
      setEndIndex(numToShow);
    } else {
      setStartIndex((prevIndex) =>
        prevIndex === numCards ? 0 : prevIndex + 1
      );
      setEndIndex((prevIndex) => (prevIndex === numCards ? 0 : prevIndex + 1));
    }
  };

  // show the previous group of cards
  const goPrev = (): void => {
    if (startIndex === 0) {
      setStartIndex(numCards - 1);
      setEndIndex((prevIndex) => prevIndex - 1);
    } else {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
    setEndIndex((prevIndex) => (prevIndex <= 0 ? numCards : prevIndex - 1));
  };

  return (
    <div className="project-cards">
      <button type="button" className="button1" onClick={() => goPrev()}>
        {" "}
        ⇦{" "}
      </button>

      <div className="cards-container">{shownCards}</div>

      <button type="button" className="button2" onClick={() => goNext()}>
        {" "}
        ⇨{" "}
      </button>
    </div>
  );
};

export default CardCarousel;
