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
          <img src="images/main/idm.webp" alt="" />
          <h3>IDONTMIND 💭</h3>
          <a href="https://github.com/lablueprint/idontmind" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.figma.com/design/Goc2z8Dh48YCUURW6mFG5q/Designs?node-id=3982-4643&node-type=canvas" target="_blank">
            Figma
          </a>
          {" | "}
          <a href="https://lablueprint.org/projects/idontmind" target="_blank">
            Ideation
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: a mobile app i built for blueprint ('23-24)! done in partnership with the nonprofit "iDontMind," which aims to destigmatize mental health and provide resources for those struggling. our app serves as a centralized resource bank for mental health resources, and a platform for users to anonymously share their stories.
          </p>
          <p>
            <b>features</b>: journaling system, mood tracker, habit tracker visualization, resource bank, filterable story wall, and more!
          </p>
          <p>
            <b>built with</b>: react native, mongodb, aws s3, express, nodejs
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
            Ideation
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
          <h3>BruinShare 🚗</h3>
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
          <img src="images/main/gallery.jpg" alt="" />
          <h3>Plantingo 🌱</h3>
          <a href="https://github.com/angelahao6/Plantingo" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://devpost.com/software/plantingo" target="_blank">
            Devpost
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: submitted to LA Hacks 2024, this mobile app takes outdoor exploration to a new level by gamifying the process of identifying plants and trees. users scan a plant in real-time, and we spin up a fun, persona-based chatbot with the plant, allowing users to learn more about the plant and its ecosystem. users can also earn points by identifying plants, and compete with friends on a leaderboard.
          </p>
          <br></br>
          <p>
            <b>built with</b>: reactjs, flask, gemini api, mongodb, a group of 4 very talented friends and teammates
          </p>
        </div>
      }
    />
  );

  const duckyoumean = (
    <FlipCard
      id="10"
      frontDiv={
        <div>
          <img src="images/main/dym.jpg" alt="" />
          <h3>The Duck You Mean? 💬</h3>
          <a href="https://github.com/joycechen721/duck-you-mean" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://devpost.com/software/the-duck-you-mean" target="_blank">
            Devpost
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: winner of "Best Use of ElevenLabs" in TreeHacks 2025! a voice AI duckie inspired by the concept of "rubber duck debugging," that reverses the roles of a learner and teacher, personalizes the educational experience, and encourages active recall. the duckie asks you questions about a topic of your choice, and you answer them. it then uses AI to analyze your responses and provide feedback on how to improve your understanding of the topic.
          </p>
          <p>
            <b>built with</b>: nextjs, elevenlabs api, openai api, mistralai api, zoom api
          </p>
        </div>
      }
    />
  );

  const endoverdose = (
    <FlipCard
      id="11"
      frontDiv={
        <div>
          <img src="images/main/Home Map.png" alt="" />
          <h3>End Overdose ❤️‍🩹</h3>
          <a href="https://github.com/lablueprint/end-overdose" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.figma.com/design/hgXI30qSTZvVKKGg1rnrGL/EO-Designs?node-id=4280-61927&t=KwOer9xSGAwqcDRc-1" target="_blank">
            Figma
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: project i led for blueprint ('24-25)! follow along as mr. narcat teaches you about the dangers of fentanyl and how to prevent overdoses. in partnership with End Overdose, this web app is designed to be used in LAUSD high schools, and built by my team of 12 student developers/designers.
          </p>
          <br></br>
          <p>
            <b>features</b>: interactive lessons, quizzes, points system, admin dashboard to track student progress and view analytics
          </p>
          <p>
            <b>built with</b>: nextjs, firebase, react, mui
          </p>
        </div>
      }
    />
  );

  const ghostface = (
    <FlipCard
      id="12"
      frontDiv={
        <div>
          <img src="images/main/ghostie.jpg" alt="" />
          <h3>Ghostface Cookah 🍳</h3>
          <a href="https://github.com/joycechen721/lahacks25-spectacles" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://devpost.com/software/ghostface-cookah" target="_blank">
            Devpost
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: winner of Snapchat's Challenge “Dream it. Build it.” in LA Hacks 2025! an AR cooking assistant for Snapchat Spectacles that overlays step-by-step video instructions, cooking timers, and voice-controlled navigation. a response to the challenge of cooking with your hands full, this lens allows you to cook hands-free and without needing to look at your phone.
          </p>
          <br></br>
          <p>
            <b>built with</b>: whispier (via groq), snap lens studio, gemini api, typescript
          </p>
        </div>
      }
    />
  );

  const transport = (
    <FlipCard
      id="13"
      frontDiv={
        <div>
          <img src="images/main/transit.png" alt="" />
          <h3>Metro Bruin 🚌</h3>
          <a href="https://github.com/yashgoy41/metro-bruin" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.canva.com/design/DAGpUcAv6AQ/gwrX3KG_M1v9RSoo-DdOaA/watch?utm_content=DAGpUcAv6AQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcfc1feb270" target="_blank">
            Poster
          </a>{" "}
          |{" "}
          <a href="https://www.notion.so/anika-bala/Final-Evaluation-Blog-Post-2099ad9f08cf802591faccb0d8cb29fd?source=copy_link" target="_blank">
            Blog
          </a>
        </div>
      }
      backDiv={
        <div>
          <p>
            <b>about</b>: 3-month research project for cs 188, human-computer interaction with professor eunice jun! aimed to increase public transportation ridership among UCLA students, this mobile app provides an overlay of trendy cafes, restaurants, and shops along the LA bus routes, encouraging students to explore the city while commuting.
          </p>
          <br></br>
          <p>
            <b>built with</b>: lovable, react, typescript, an awesome team of 4 students
          </p>
        </div>
      }
    />
  );

  return [
    transport,
    endoverdose,
    duckyoumean,
    ghostface,
    plantingo,
    idontmind,
    fotc,
    bruinshare,
    mapify,
    // peachparty,
    gui,
    // misc,
    // pnetphlix,
  ];
};

export default ProjectCards;
