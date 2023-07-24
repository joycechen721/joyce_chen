import React, { useState, useEffect } from "react";

interface CarouselProps {
  cards: JSX.Element[];
  showNum: number;
}

// className={`${startIndex === index ? "active-card" : "hidden-card"}`}

const CardCarousel: React.FC<CarouselProps> = ({ cards, showNum }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(showNum);
  const [shownCards, setShownCards] = useState<any[]>(
    cards.slice(startIndex, endIndex)
  );
  const numCards: number = cards.length; // total # of cards
  const numToShow: number = showNum > numCards ? numCards : showNum; // # of cards to show at a time

  // the ordered group of cards to display
  const groupCards = (): void => {
    if (startIndex > endIndex) {
      const firstHalf = cards.slice(startIndex);
      const secondHalf = cards.slice(0, endIndex + 1);
      setShownCards(firstHalf.concat(secondHalf));
    } else {
      setShownCards(cards.slice(startIndex, endIndex));
    }
  };

  useEffect(() => groupCards(), [startIndex, endIndex]);

  // console.log("START: ", startIndex, " END: ", endIndex);
  // console.log("SHOWN CARDS: ", shownCards);

  // setting the start/end indices to show the next group of cards
  const goNext = (): void => {
    if (startIndex + 1 === numCards) {
      setStartIndex(0);
      setEndIndex(showNum);
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

      <div className="cards-container">
        {shownCards.map((card, index) => (
          <div key={index} className="card">
            {card}
          </div>
        ))}
      </div>

      <button type="button" className="button2" onClick={() => goNext()}>
        {" "}
        ⇨{" "}
      </button>
    </div>
  );
};

export default CardCarousel;
