/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const ProjectCards = () => {
  const gui = (
    <div className="" id="1">
      <img src="images/GUI.png" alt="" />
      <h3>3D-SMT GUI 🧬</h3>
      <div>
        <a
          href="https://github.com/joycechen721/3D-Single-Molecule-Tracking-GUI"
          target="_blank"
        >
          GitHub
        </a>{" "}
        <a href="https://bit.ly/joycechen3DSMT-GUI" target="_blank">
          Research
        </a>
      </div>
      <p>
        A graphical user interface that plots intensity/lifetime data obtained
        from 3D single-molecule tracking instruments to determine DNA transition
        state probabilities (the rate at which DNA hybridizes). Analyzes a
        molecule's fluorescence time traces through a hidden Markov model, using
        the ebFRET library.
      </p>
      <p>Built with: MATLAB, Python</p>
    </div>
  );

  const universify = (
    <div className="" id="2">
      <img src="images/universify.png" alt="" />
      <h3>Universify 🏫</h3>
      <a href="https://bit.ly/joycec_universifyprototype" target="_blank">
        Prototype
      </a>
      <p>
        A web-app that helps high schoolers organize college application
        materials, because essays & college spreadsheets & resume's get messy
        super quickly (from personal experience). Currently still work in
        progress, but here's the{" "}
      </p>
      <p>Built with: React.js, Figma</p>
    </div>
  );

  const misc = (
    <div className="" id="3">
      <img src="images/terris.png" alt="" />
      <h3>Club Websites</h3>
      <p>
        Developed websites for a couple different organizations and events
        across the years.
      </p>
      <br />
      <p>
        🌐{" "}
        <a href="https://github.com/dailybruin/flamingo" target="_blank">
          The Daily Bruin
        </a>{" "}
        🐻
      </p>
      <p>
        🌐{" "}
        <a href="https://www.spfremont.org/" target="_blank">
          Superposition Fremont
        </a>{" "}
        💚
      </p>
      <p>
        🌐{" "}
        <a href="https://ahscsfirst.github.io/csfirst/" target="_blank">
          AHS Computer Science First Club
        </a>{" "}
        👩‍💻
      </p>
      <p>
        🌐{" "}
        <a
          href="https://demoterris.merylmathew.repl.co/index.html"
          target="_blank"
        >
          Terris Challenge
        </a>{" "}
        🧑‍🔬
      </p>
    </div>
  );

  const fotc = (
    <div className="" id="4">
      <img src="images/fotc.png" alt="" />
      <h3>Friends of the Children 👭</h3>
      <a
        href="https://github.com/lablueprint/friends-of-the-children"
        target="_blank"
      >
        GitHub
      </a>{" "}
      <a
        href="https://www.figma.com/file/LOaE5OE8xoEOhHYaHS1dJx/FOTC-Design?type=design&node-id=2306%3A4761&mode=design&t=GJ4QMbRZFwuwA3PD-1"
        target="_blank"
      >
        Figma Design
      </a>
      <p>
        A web app that serves as a resource bank for Friends of the Children,
        Los Angeles chapter. Developed with a team of 6 developers and 4
        designers at UCLA's LA Blueprint.
      </p>
      <p>Built with: React.js, Node, Express, Firebase, Google API's</p>
    </div>
  );

  const mapify = (
    <div className="" id="5">
      <img src="images/mapify.png" alt="" />
      <h3>Mapify 🌍 🎧</h3>
      <a href="https://bit.ly/joycec_universifyprototype">GitHub</a>
      <p>
        A mobile app that blends your location and music taste, bringing
        geographic control of your music to your fingertips! Features include:
        generating location-based song reccs, viewing friends' locations and
        current song, and creating custom playlist rooms with your music buddies
        :{")"}
      </p>
      <p>Built with: React Native, Node, PostgreSQL</p>
    </div>
  );

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  const bruinshare = (
    <div
      id="6"
      className={`flip-container ${isFlipped ? "flipped" : ""}`}
      onClick={() => handleFlip()}
    >
      <div className="flipper">
        <div className="front">
          <img src="images/bruinshare.png" alt="" />
          <h3>BruinShare 🚌</h3>
          <a href="https://bit.ly/joycec_universifyprototype">GitHub</a>
          <a
            href="https://docs.google.com/presentation/d/1fMz-C_A9c9Lis-F9RDV-bSLyxL38-4UVSQzA2nmzmV8/edit#slide=id.g24eac0b5bce_0_56"
            target="_blank"
          >
            Product Design
          </a>
          <p>
            A web app designed to streamline the process of ridesharing,
            specifically for UCLA students. Serves as a centralized platform
            where people can create and join ridesharing groups, lowering the
            cost of Ubering to your favorite destinations~
          </p>
          <p>Built with: Next.js, React.js, Express, Firebase, MUI</p>
        </div>
        <div className="back">
          {/* <!-- Add content for the back side of the flip here (blank face) --> */}
        </div>
      </div>
    </div>
  );

  const peachparty = (
    <div className="" id="7">
      <img src="images/peachparty.png" alt="" />
      <h3>Peach Party 🍑</h3>
      <a href="https://bit.ly/joycec_universifyprototype">GitHub</a>
      <p>
        A web app that serves as a resource bank for Friends of the Children
        (Los Angeles).
      </p>
      <p>Built with: C++</p>
    </div>
  );

  const pnetphlix = (
    <div className="" id="8">
      <img src="images/pnetphlix.png" alt="" />
      <h3>PnetPhlix 🎬 🍿</h3>
      <a href="https://bit.ly/joycec_universifyprototype">GitHub</a>
      <p>
        A web app that serves as a resource bank for Friends of the Children
        (Los Angeles).
      </p>
      <p>Built with: C++</p>
    </div>
  );

  return [
    fotc,
    bruinshare,
    mapify,
    gui,
    peachparty,
    misc,
    universify,
    pnetphlix,
  ];
};

export default ProjectCards;