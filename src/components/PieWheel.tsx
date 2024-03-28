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
            <b>random flute awards</b>
          </p>
          <ul>
            <li>1st place instrumental solo - us open music competition</li>
            <li>
              abrsm grade 8 flute with distinction (awarded 32 credits @level 3). oh i hated these tests.
            </li>
            <li>
              state solo festival superior rating - california music educators
              association
            </li>
            <li>
              got into san francisco conservatory of music... but didn't go rip.
            </li>
          </ul>
          <p>
            <b>more random awards lol</b>
          </p>
          <ul>
            <li>president's volunteer gold service award</li>
            <li>
              american high school academic block award, academic honor pin
            </li>
            <li>2x AP scholar with distinction</li>
          </ul>
          <p>
            <b>no ucla scholarships T^T well yes.</b>
          </p>
          <p>manifesting a job outta college, good grades, and clear skin please 🥹</p>
        </div>
      )}
      {index === 2 && (
        <div id="workshops" className="frame piedesc">
          <h2>workshops</h2>
          <p>i really don't know what i was trying to do when i came up with this "workshops" section like ????? girl no one would want to hear you yap about some cs concept or life story smh.</p>
          {/* <ul>
            <li>

            </li>
          </ul> */}
        </div>
      )}
      {index === 3 && (
        <div id="teaching" className="frame piedesc">
          <h2>teaching</h2>
          <p>so i'm not great at teaching! but i try. high school me just recruited other ppl to help me teach for the organizations i ran xD. college me is eager to explore <i>teaching</i> teaching.</p>
          <ul>
            <li>
              <b>google cs first club</b> (ahs president '21-'22)
              <ul>
                <li>hosted weekly coding practice sessions and career-exploration events (speaker panels, workshops) for students at my hs interested in computer science!</li>
                <li>mainly taught python, java, c++</li>
              </ul>
            </li>
            <li>
              <b>coding tomorrow initiative</b> (ahs chapter president '21-'22)
              <ul>
                <li>directed free virtual classes on web design,
                  python, and java </li>
                <li>taught 150+ elementary/middle school students across fusd</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
      {index === 4 && (
        <div id="music" className="frame piedesc">
          <h2>music</h2>
          <p>
            the best thing about music is the community of people you find, who
            you can rant about practicing 40 hours with or getting roasted by your music teacher :D oh yes!
          </p>
          <ul>
            <li>
              <b>california youth symphony</b>, 2019-22
              <ul>
                <li>2nd flute in senior orchestra, 1st flute in wind symphony</li>
              </ul>
            </li>
            <li>
              <b>berkeley youth orchestra</b>, 2017-18
              <ul>
                <li>1st flute & chamber orchestra flutist</li>
              </ul>
            </li>
            <li>
              <b>tmjh string ensemble </b>(天母國中弦樂團), 2016-17
              <ul>
                <li>dabbled w violin a couple of years and played for my school</li>
                <li>2nd violin, placed 1st in Taipei's province-wide ensemble competition</li>
              </ul>
            </li>
            <li>
              <b>tmjh wind ensemble </b>(天母國中管樂團), 2016-17
              <ul>
                <li>1st flute, co-soloist, performed at National Concert Hall in Taipei</li>
                <li>placed 3rd in Taiwan's national ensemble competition</li>
              </ul>
            </li>
            <li>
              <b>fremont flute ensemble</b>, 2013-22
              <ul>
                <li>first chair, principal flutist/soloist</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PieWheel;
