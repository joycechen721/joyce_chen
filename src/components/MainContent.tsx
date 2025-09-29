import React, { useState, useEffect } from "react";
import Image from "next/image";
import CardCarousel from "./CardCarousel";
import ProjectCards from "./ProjectCards";
import CloudsLanding from "./CloudsLanding";
import Archive2022 from "./Archive2022";
import Archive2025 from "./Archive2025";
import {
  faSchool,
  faEnvelope,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import SpotifyTrack from "./SpotifyTrack";

const MainContent = () => {

  const [activeArchiveIdx, setActiveArchiveIdx] = useState<number | null>(1);

  return (
    <main>
      {/* <!-- LANDING PAGE ^_^--> */}
      <section>
        <div className="landing-container flex-container">
          <div className="left-landing frame">
            <h1>
              Hi! I&apos;m <span className="animate-text">Joyce Chen.</span>
            </h1>
            <Image
              src="/images/main/hi.jpg"
              className="crop"
              alt="joyce chen"
              width={210}
              height={210}
            />
            <div className="separator"></div>

            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <span className="contacts-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a
                    href="mailto:joycechen721@g.ucla.edu"
                    className="contact-link"
                  >
                    joycechen721@ucla.edu
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <span className="contacts-icon">
                    <FontAwesomeIcon icon={faSchool} />
                  </span>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Education</p>
                  <p className="contact-link">UCLA Computer Science &apos;26</p>
                </div>
              </li>

              <div className="my-links">
                <a href="https://github.com/joycechen721" target="_blank">
                  <span className="circle">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/joycechen721/"
                  target="_blank"
                >
                  <span className="circle">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
                <a href="">
                  <span className="circle">
                    <FontAwesomeIcon icon={faFileCsv} />
                  </span>
                </a>
                <a
                  href="https://open.spotify.com/user/aa5970or7sdjkclmzp1wwnj1b"
                  target="_blank"
                >
                  <span className="circle">
                    <FontAwesomeIcon icon={faSpotify} />
                  </span>
                </a>
              </div>
            </ul>
          </div>

          <div className="right-landing">
            <div className="frame">
              <h2>intro 👋</h2>
              <p>
                Hello! I&apos;m Joyce—your friendly neighborhood cat-lover and (struggling) computer science student. From building apps with friends to tackling class projects, I&apos;ve come to love how coding brings ideas to life and connects people in the process. My goal is to keep creating technology that sparks joy—whether it&apos;s a simple tool or something with the potential to make a bigger impact. 🌎 ❤️ <br></br>

               Outside of work, you can catch me exercising, watching F1, cafe hopping, and enjoying anime! I also love travelling and exploring new places, most recently Japan (in April) and Switzerland (in my dreams). I&apos;m always looking for new adventures and tasty food, so reach out if you have any recs and let&apos;s chat! 😊
              </p>
            </div>

            <div className="frame">
              <h2>
                <em>currently...</em>
              </h2>
              <ul>
                <li className="flower-item">
                <SpotifyTrack />
                  back at UCLA for my final year, enjoying life with friends and joining new recreational clubs 🏫
                </li>
                <li className="flower-item">
                  watching the great british baking show & reading the 48 laws of power 🍰
                </li>
                <li className="flower-item">
                  listening to these dope artists - lil ghost, hua chenyu, zhou shen 🎵
                </li>
                <li className="flower-item">
                  attempting to learn how to cook and drive (and making some progress!) 🍳
                </li>
                <li className="flower-item">
                  last updated 9/29/2025 💖
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* <!-- EXPERIENCE & SKILLS --> */}
      <div>
        <div className="container flex-container">
          <div className="frame" id="xp">
            <h2>experience.</h2>
            <div className="separator"></div>
            <div className="skills">
            <div className="skill-row">
                <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Image src="/images/logos/google.png" alt="Google Logo" width={30} height={30} />
                  <a href="https://www.google.com/" target="_blank">
                    Google
                  </a>
                </h3>
                <ul>
                   <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <mark>Software Engineer Intern</mark>
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                        June &apos;25 - Sept &apos;25
                      </div>
                    </div>
                    <p>
                      Developed an end-to-end solution for image attachment optimizations in Google Chat (backend server & Android app). Featuring whimsy g-bikes 🚲, team sailboating in SF, Gordon Ramsey breakfast eggs, dried pineapple, sneaking into Meta and Slack, and more~ 😉</p>
                  </li>
                  <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <mark>STEP Intern</mark> 
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                        June &apos;24 - Sept &apos;24
                      </div>
                    </div>
                    <p>
                      Worked on a cool database optimization project. Learned a lot about Google internal tools and had WAY too many coffee chats. Had a blast playing Squid Game VR (TEAM SQUIGGLER), go-karting (my intro to F1), clearing a museum escape room, and checking out red pandas at the zoo 🐼!</p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
               <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Image src="/images/logos/elfin.png" alt="ELFIN Logo" width={30} height={30} />
                  <a href="https://elfin.igpp.ucla.edu/" target="_blank">
                    ELFIN, CEPHEIDS Cubesat Mission
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <mark>Flight Software Engineer</mark> 
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                        Oct &apos;23 - June &apos;24
                      </div>
                    </div>
                    <p>
                      Wrote the flight software for a cubesat mission at
                      UCLA. Designed data handling layers between ground servers and flight computers. 
                    </p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Image src="/images/logos/blueprint.png" alt="LA Blueprint Logo" width={30} height={30} />
                  <a href="https://lablueprint.org/" target="_blank">
                    LA Blueprint, Tech for Social Good
                  </a>
                </h3>
                <ul>
                <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <mark>End Overdose Project Lead</mark>
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                        Sept &apos;24 - June &apos;25
                      </div>
                    </div>
                    <p>
                      Led a team of 8 developers in building a contracted web app for End Overdose, to educate LAUSD high schools on the dangers of fentanyl and other drugs. 
                    </p>
                  </li>
                    <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                      <mark>IDONTMIND Developer</mark>
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                      Sept &apos;23 - July &apos;24
                      </div>
                    </div>
                    <p>
                      Developed a React Native app for logging health habits, mental health check-ins, and daily journaling, designed to be eventually deleted as users progress into healthier mental states ❤️‍🩹.
                    </p>
                    </li>
                    <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                      <mark>FOTC Developer</mark>
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                      Sept &apos;22 - July &apos;23
                      </div>
                    </div>
                    <p>
                      Built a React web app to serve as a centralized resource bank
                      for the &quot;Friends of the Children&quot; nonprofit. Worked with 6
                      developers in weekly 6-hour sprints, creating software
                      deliverables across a 7-month period.
                    </p>
                    </li>
                  </ul>
                  </div>
                  <div className="skill-row">
                  <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Image src="/images/logos/dailybruin.png" alt="Daily Bruin Logo" width={30} height={30} />
                    <a href="https://dailybruin.com/" target="_blank">
                    The Daily Bruin
                    </a>
                  </h3>
                  <ul className="list-items">
                    <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                      <mark>Bruinwalk Developer</mark>
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                      Sept &apos;23 - Present
                      </div>
                    </div>
                    <p>Dev-ops for bruinwalk.com, UCLA&apos;s student-run professor rating site. Met cool people and doomed about classes with them</p>
                    </li>
                    <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                      <mark>Software Engineer Intern</mark>
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                      Sept &apos;22 - June. &apos;23
                      </div>
                    </div>
                    <p>
                      Developed and maintained the official site for UCLA’s
                      100-years-and-running newspaper, The Daily Bruin. Uses
                      React and other web application frameworks to build
                      interactive tag pages for 30K monthly viewers.
                    </p>
                    </li>
                  </ul>
                  </div>
                  <div className="skill-row">
                  <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Image src="/images/logos/perfectcorp.jpeg" alt="Perfect Corp Logo" width={30} height={30} />
                    <a
                    href="https://www.perfectcorp.com/business"
                    target="_blank"
                    >
                    Perfect Corp, AR/VR Makeup Company
                    </a>
                  </h3>
                  <ul>
                    <li className="flower-item">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                      <mark>Software Engineer Intern</mark>
                      </div>
                      <div style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                      June &apos;23 - Sept &apos;23
                      </div>
                    </div>
                    <p>
                      Worked on the R&D Server team to develop CRUD APIs for internal tools and business consoles. Went on hikes, ate fire team lunches, explored Taipei and Taichung, and made lifelong friends with my team.
                    </p>
                    </li>
                  </ul>
                  </div>
            </div>
          </div>

            <div className="sidebar" style={{ position: "sticky", top: 0, alignSelf: "flex-start" }}>
            <div className="frame2">
              <h3>relevant skills </h3>
              <ul>
              <li><b>languages</b>: c/c++, java, javascript, python, typescript, golang, ocaml, html/css, kotlin</li>
              <li><b>frameworks</b>: node.js, next.js, react.js, react native, express, spring</li>
              <li><b>other technologies</b>: mysql, mongodb, firebase, hibernate, rest api&apos;s, git/github, android studio</li>
              </ul>
            </div>

            <div className="frame2">
              <h3>coursework 📚</h3>
              <div className="flex-row courses">
              {[
                { href: "/courses/cs31", label: "CS 31" },
                { href: "/courses/cs32", label: "CS 32" },
                { href: "/courses/cs33", label: "CS 33" },
                { href: "/courses/cs35l", label: "CS 35L" },
                { href: "/courses/cs180", label: "CS 180" },
                { href: "/courses/cs111", label: "CS 111" },
                { href: "/courses/cs181", label: "CS 181" },
                { href: "/courses/csm146", label: "CS M146" },
                { href: "/courses/cs174a", label: "CS 174A" },
                { href: "/courses/cs118", label: "CS 118" },
              ].map(course => (
                <div key={course.href}>
                  <Link href={course.href}>
                    {course.label}
                  </Link>
                </div>
              ))}
              </div>

              <br />
            </div>
            </div>
        </div>
      </div>

      <hr />

      {/* <!-- PROJECTS SECTION --> */}
      <section id="projects">
        <div className="container">
          <div className="frame">
            <h2>projects.</h2>
            <div className="separator"></div>
            <CardCarousel cards={ProjectCards()} showNum={15} />
          </div>
        </div>
      </section>

      <hr />

      {/* <!-- MORE ABOUT ME --> */}
      <section id="life">
        <div className="container">
          <div className="frame">
            <h2>life and likes.</h2>
            <div className="separator"></div>
            <br />
            {(() => {
              const archives = [
                {
                  label: "2022-24",
                  content: <Archive2022 />,
                },
                {
                  label: "2025",
                  content: <Archive2025 />,
                },
              ];

              return (
                <>
                  <div className="flex-container gap">
                    {archives.map((archive, idx) => (
                      <button
                        key={archive.label}
                        className={`archive-button ${activeArchiveIdx === idx ? "archive-button-selected" : ""}`}
                        onClick={() =>
                          setActiveArchiveIdx(activeArchiveIdx === idx ? null : idx)
                        }
                      >
                        {archive.label} {activeArchiveIdx === idx ? "🕯️" : "💡"}
                      </button>
                    ))}
                  </div>
                  {activeArchiveIdx !== null && (
                    <>
                      {archives[activeArchiveIdx].content}
                      <br />
                    </>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className="container blog">
          <CloudsLanding />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
