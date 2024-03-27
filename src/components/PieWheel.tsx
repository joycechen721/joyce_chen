/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const PieWheel = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [index, setIndex] = useState(1);

  const handleSpinClick = () => {
    setRotationAngle((prevAngle) => prevAngle + 90);
    switch (index) {
      case 4: {
        setIndex(1);
        break;
      }
      default: {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  return (
    <>
      <div className="pie">
        <img
          className="box"
          src="images/main/pie.png"
          alt=""
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        />
        <button type="button" className="spin" onClick={handleSpinClick}>
          ⇨
        </button>
      </div>
      {index === 1 && (
        <div id="achievements" className="frame piedesc">
          <h2>achievements</h2>
          <p>
            awards minus scholarships from other colleges b/c ucla didn't give
            me any ;-;
          </p>
          <ul>
            <li>1st Place Instrumental Solo - US Open Music Competition</li>
            <li>
              State Solo Festival Superior Rating - California Music Educators
              Association
            </li>
            <li>
              ABRSM Grade 8 Flute with Distinction (awarded 32 credits @Level 3)
            </li>
            <li>President's Volunteer Gold Service Award</li>
            <li>
              American High School Academic Block Award, Academic Honor Pin
            </li>
            <li>2x AP Scholar with Distinction</li>
          </ul>
          <p>and manifesting for future achievements...</p>
          <p>let's get scholarships, an internship, and good grades please 🥹</p>
        </div>
      )}
      {index === 2 && (
        <div id="workshops" className="frame piedesc">
          <h2>workshops</h2>
          <ul>
            <li>
              none yet, work in progress! here's some placeholder text that i
              will get back to.
            </li>
          </ul>
        </div>
      )}
      {index === 3 && (
        <div id="teaching" className="frame piedesc">
          <h2>teaching</h2>
          <ul>
            <li>
              none yet, work in progress! here's some placeholder text that i
              will get back to.
            </li>
          </ul>
        </div>
      )}
      {index === 4 && (
        <div id="music" className="frame piedesc">
          <h2>music</h2>
          <p>
            for half of my life, I lived and breathed in concerts and
            performances 🥳{" "}
          </p>
          <p>
            the best thing about music is the community of people you find, who
            you can rant about practicing 40 hours with or relate to from
            getting roasted by your music teacher :D oh! and also make cool
            music together!
          </p>
          <ul>
            <li>2.2.2017 - Taipei National Concert Hall, TMJH Wind Ensemble</li>
            <li>
              i seriously can't remember...there are too many. will update
              sometime.
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PieWheel;
