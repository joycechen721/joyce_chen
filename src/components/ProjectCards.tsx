/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import FlipCard from "./FlipCard";

const ProjectCards = () => {
  const gui = (
    <FlipCard
      id="1"
      frontDiv={
        <div>
          <img src="images/main/GUI.png" alt="" />
          <h3>3D-SMT GUI 🧬</h3>
          <div>
            <a
              href="https://github.com/joycechen721/3D-Single-Molecule-Tracking-GUI"
              target="_blank"
            >
              GitHub
            </a>
            {" | "}
            <a href="https://bit.ly/joycechen3DSMT-GUI" target="_blank">
              Presentation
            </a>
          </div>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: a graphical user interface that plots
            intensity/lifetime data obtained from 3D single-molecule tracking
            instruments. determines DNA transition state probabilities (the rate
            at which DNA hybridizes) & analyzes a molecule's fluorescence time
            traces using a hidden Markov model.
          </p>
          <p>
            <b>features</b>: check the presentation!
          </p>
          <p>
            <b>built with</b>: matlab, python
          </p>
        </div>
      }
    />
  );

  const idontmind = (
    <FlipCard
      id="2"
      frontDiv={
        <div>
          <img src="images/main/idontmind.png" alt="" />
          <h3>IDONTMIND 💭</h3>
          <a href="https://github.com/lablueprint/idontmind" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://idontmind.com/" target="_blank">
            IDONTMIND
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: in progress
          </p>
          <p>
            <b>features</b>: in progress
          </p>
          <p>
            <b>built with</b>: react native, mongodb, express
          </p>
        </div>
      }
    />
  );

  const misc = (
    <FlipCard
      id="3"
      frontDiv={
        <div className="" id="3">
          <img src="images/main/terris.png" alt="" />
          <h3>Misc. Websites ⚙️</h3>
        </div>
      }
      backDiv={
        <div>
          <p>
            Developed multiple websites for a different organizations and events
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
      }
    />
  );

  const fotc = (
    <FlipCard
      id="4"
      frontDiv={
        <div>
          <img src="images/main/fotc.png" alt="" />
          <h3>Friends of the Children 👭</h3>
          <a
            href="https://github.com/lablueprint/friends-of-the-children"
            target="_blank"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://www.figma.com/file/LOaE5OE8xoEOhHYaHS1dJx/FOTC-Design?type=design&node-id=2306%3A4761&mode=design&t=GJ4QMbRZFwuwA3PD-1"
            target="_blank"
          >
            Figma
          </a>
          {" | "}
          <a href="https://lablueprint.org/projects/fotc" target="_blank">
            Outline
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: a web app i built with 10 other student
            developers/designers in Blueprint ('22-23)! done in partnership with
            the nonprofit "Friends of the Children," which pairs underserved
            youth with professional mentors. our app serves as a centralized
            resource bank for the organization's administrators, mentors, and
            caregivers :{")"} <br />
            <b>features</b>: global announcement wall, login/user profile
            system, nested folders page, mentees modules page, and more!
          </p>
          <p>
            <b>built with</b>: react, nodejs, express, firebase, google api's
          </p>
        </div>
      }
    />
  );

  const mapify = (
    <FlipCard
      id="5"
      frontDiv={
        <div>
          <img src="images/main/mapify.png" alt="" />
          <h3>Mapify 🌍 🎧</h3>
          <a href="https://github.com/kalcow/mapify" target="_blank">
            GitHub
          </a>
          {" | "}
          <a
            href="https://drive.google.com/file/d/1gyrHQvDk0izxN1q71M-cK3tDu-7sS9oz/view?usp=sharing"
            target="_blank"
          >
            Presentation
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: a mobile app that blends your location and music
            taste, bringing geographic control of your music to your fingertips!
          </p>
          <p>
            <b>features</b>: generating location-based song reccs, viewing
            friends' locations and current song, and creating custom playlist
            rooms with your music buddies :{")"}
          </p>
          <p>
            <b>built with</b>: react native, nodejs, postgresql
          </p>
        </div>
      }
    />
  );

  const bruinshare = (
    <FlipCard
      id="6"
      frontDiv={
        <div>
          <img src="images/main/bruinshare.png" alt="" />
          <h3>BruinShare 🚌</h3>
          <a href="https://github.com/rolandyangg/BruinShare" target="_blank">
            GitHub
          </a>
          {" | "}
          <a
            href="https://docs.google.com/presentation/d/1fMz-C_A9c9Lis-F9RDV-bSLyxL38-4UVSQzA2nmzmV8/edit#slide=id.g24eac0b5bce_0_56"
            target="_blank"
          >
            Presentation
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: web app that streamlines the process of ridesharing,
            specifically for (broke) UCLA students. users are able to create and
            join ridesharing groups that can lower the cost of Ubering to their
            favorite destinations! built in a team of 5 for the course cs35l
            (software construction lab).
          </p>
          <p>
            <b>features</b>: bulletin board for active rideshare groups, ability
            to create/edit/delete rideshare postings, user-specific join/leave
            groups page, login/user profile system
          </p>
          <p>
            <b>built with</b>: nextjs, react, nodejs, express, firebase, mui
          </p>
        </div>
      }
    />
  );

  const peachparty = (
    <FlipCard
      id="7"
      frontDiv={
        <div>
          <img src="images/main/peachparty.png" alt="" />
          <h3>Peach Party 🍑</h3>
          <a href="https://github.com/joycechen721/PeachParty" target="_blank">
            GitHub
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: 2-player video game parody of “Mario Party” in C++.
            characters Peach/Yoshi navigate a Monopoly-like board to collect
            coins whilst dodging random projectiles and avoiding monsters
            Boo/Bowser.
          </p>
          <p>
            <b>features</b>: designed using C++ inheritance concepts such as
            abstract base classes & pure virtual functions.
          </p>
          <p>
            <b>built with</b>: c++
          </p>
        </div>
      }
    />
  );

  const pnetphlix = (
    <FlipCard
      id="8"
      frontDiv={
        <div>
          <img src="images/main/pnetphlix.png" alt="" />
          <h3>PnetPhlix 🎬 🍿</h3>
          <a href="https://github.com/joycechen721/PnetPhlix" target="_blank">
            GitHub
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: movie recommendation app that assesses real-world
            films based on genre, director, and actors from the user's
            previously watched movies.
          </p>
          <p>
            <b>features</b>: a binary-tree-multimap data structure to load and
            filter through 20K+ movies and 100K+ users in less than 1 second.
          </p>
          <p>
            <b>built with</b>: c++
          </p>
        </div>
      }
    />
  );

  const plantingo = (
    <FlipCard
      id="9"
      frontDiv={
        <div>
          <img src="images/main/idontmind.png" alt="" />
          <h3>Plantingo 💭</h3>
          <a href="https://github.com/lablueprint/idontmind" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://idontmind.com/" target="_blank">
            Devpost
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: in progress
          </p>
          <p>
            <b>features</b>: in progress
          </p>
          <p>
            <b>built with</b>: react native, mongodb, express
          </p>
        </div>
      }
    />
  );

  return [
    plantingo,
    idontmind,
    fotc,
    bruinshare,
    mapify,
    gui,
    peachparty,
    misc,
    pnetphlix,
  ];
};

export default ProjectCards;
