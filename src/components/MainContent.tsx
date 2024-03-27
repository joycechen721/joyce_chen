/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CardCarousel from "./CardCarousel";
import ProjectCards from "./ProjectCards";
import CloudsLanding from "./CloudsLanding";
import PieWheel from "./PieWheel";
import {
  faSchool,
  faEnvelope,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as api from "@/utils";
import Link from "next/link";
import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

const MainContent = () => {
  const [isCollapse1Visible, setIsCollapse1Visible] = useState(false);
  const [isCollapse2Visible, setIsCollapse2Visible] = useState(false);
  const [isCollapse3Visible, setIsCollapse3Visible] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleCollapseToggle = (collapseId: number): void => {
    switch (collapseId) {
      case 1:
        setIsCollapse1Visible((prev) => !prev);
        break;
      case 2:
        setIsCollapse2Visible((prev) => !prev);
        break;
      case 3:
        setIsCollapse3Visible((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      {/* <!-- LANDING PAGE ^_^--> */}
      <section>
        <div className="landing-container flex-container">
          <div className="left-landing frame">
            <h1>
              hi! I'm <span className="animate-text">Joyce Chen.</span>
            </h1>
            <Image
              src="/images/main/pfp.jpg"
              className="crop"
              alt="joyce chen"
              width={230}
              height={230}
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
                  <p className="contact-link">UCLA Computer Science '26</p>
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
                Hey there~ it's Joyce, your friendly neighborhood cat-lover and
                struggling computer science student! From developing full-stack
                apps to class projects, I love the way coding enhances
                my problem-solving skills and breathes life into my ideas :
                {`)`} My goal is to create technology that sparks positive change,
                whether that be simple apps or tools that revolutionize the
                world. 🌎 ❤️
                <br />
                Some of my other hobbies include reading, journaling, window
                shopping, and cafe hopping! Hit me up if you need korean drama
                reccomendations...or just a fellow hopeless romantic to confide
                in :,{")"} Also, I'm always looking for gym buddies to become
                strong muscle mommies with. Enough with this long-winded intro,
                let's keep scrolling ~
              </p>
            </div>

            <div className="frame">
              <h2>
                <em>currently...</em>
              </h2>
              <ul>
                <li className="flower-item">
                  trying to academic weapon spring quarter like a delulu (4 cs classes
                  hah..)
                </li>
                <li className="flower-item">
                  listening to these dope artists - zeph, lyn lapid, le
                  sserafim, oneheart 🎵
                </li>
                <li className="flower-item">
                  studying operating systems and leetcoding :pp the grind is
                  real.
                </li>
                <li className="flower-item">
                  reading books:{" "}
                  <a
                    href="https://www.goodreads.com/book/show/875983.How_to_Win_Friends_Influence_People#:~:text=How%20to%20Win%20Friends%20and%20Influence%20People%20is%20a%20self,the%20100%20most%20influential%20books."
                    target="_blank"
                  >
                    {" "}
                    this
                  </a>
                  ,{" "}
                  <a href="https://www.goodreads.com/en/book/show/4069">this</a>
                  , and{" "}
                  <a href="https://www.goodreads.com/book/show/56238083-george-orwell-essays?from_search=true&from_srp=true&qid=67uueHGhvH&rank=1">
                    this
                  </a>
                  . curious much? yes, GO CLICK. you won't regret.
                </li>
                <li className="flower-item">
                  working on this website 💖 and having fun!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* <!-- EXPERIENCE & SKILLS --> */}
      <section>
        <div className="container flex-container">
          <div className="frame" id="xp">
            <h2>experience.</h2>
            <div className="separator"></div>
            <div className="skills">
              <div className="skill-row">
                <h3>
                  <a href="https://elfin.igpp.ucla.edu/" target="_blank">
                    ELFIN
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>Flight Software Engineer, Oct '23 - Present</mark>
                    <p>
                      Writing the flight sofware for a satellite mission at
                      UCLA.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3>
                  <a href="https://lablueprint.org/" target="_blank">
                    LA Blueprint
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>IDONTMIND Developer, Sept '23 - Present</mark>
                    <p>
                      Continuing the Blueprint mission of creating tech for good
                      in our upcoming projects!
                    </p>
                  </li>
                  <li className="flower-item">
                    <mark>FOTC Developer, Sept. '22 - July '23</mark>
                    <p>
                      Built a React app to serve as a centralized resource bank
                      for the "Friends of the Children" nonprofit. Worked with 6
                      developers in weekly 6-hour sprints, creating software
                      deliverables across a 7-month period.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3>
                  <a href="https://new.dailybruin.com/" target="_blank">
                    Daily Bruin
                  </a>
                </h3>
                <ul className={`list-items ${isOpen ? "hide" : ""}`}>
                  <li className="flower-item">
                    <mark>Bruinwalk Developer, Sept. '23 - Present</mark>
                    <p>Dev-ops for the bruinwalk.com site.</p>
                  </li>
                  <li className="flower-item">
                    <mark>Software Engineer Intern, Sept. '22 - Present</mark>
                    <p>
                      Develops and maintains official website for UCLA’s
                      100-years-and-running newspaper, The Daily Bruin. Uses
                      React and other web application frameworks to build
                      interactive tag pages for 30K monthly viewers.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3>
                  <a
                    href="https://www.perfectcorp.com/business"
                    target="_blank"
                  >
                    Perfect Corp.
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>Software Engineer Intern, June '23 - Sept '23</mark>
                    <p>
                      Engineered CRUD API’s using Hibernate ORM and Spring to
                      track client product statuses. Developed Node.js scripts
                      to automate Strapi endpoint testing. Constructed paginated
                      React.js tables to sort, filter, export makeup SKU data on
                      the B2B service console page.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="frame2">
              <h3>relevant skills </h3>
              <ul>
                <li>languages: c++, java, javascript, python, typescript</li>
                <li>frontend: html/css, jquery, nextjs, reactjs</li>
                <li>
                  backend: express, firebase, hibernate, mysql, nodejs, spring,
                  stripe
                </li>
                <li>other technologies: rest api's, git/github</li>
              </ul>
            </div>

            <div className="frame2">
              <h3>coursework 📚</h3>
              <div className="flex-row courses">
                <div className="">
                  <Link href="/courses/cs31">CS 31</Link>
                </div>
                <div className="">
                  <Link href="/courses/cs32">CS 32</Link>
                </div>
                <div className="">
                  <Link href="/courses/cs33">CS 33</Link>
                </div>
                <div className="">
                  <Link href="/courses/cs35l">CS 35L</Link>
                </div>
                <div className="">
                  <Link href="/courses/cs180">CS 180</Link>
                </div>
                <div className="">
                  <Link href="/courses/cs111">CS 111</Link>
                </div>
                <div className="">
                  <Link href="/courses/cs181">CS 181</Link>
                </div>
                <div className="">
                  <Link href="/courses/csm146">CS M146</Link>
                </div>
                <div className="">
                  <Link href="/courses/cs174a">CS 174A</Link>
                </div>
                <div className="">
                  <Link href="/courses/cs118">CS 118</Link>
                </div>
              </div>

              <br />

              <div className="other-courses">
                <h3>online courses 💻</h3>
                <ul>
                  <li>
                    <a onClick={() => handleCollapseToggle(1)}>
                      Algorithms Part I - Princeton Coursera
                    </a>
                    {isCollapse1Visible && (
                      <div className="collapse collapse1">
                        rating: ⭐️⭐️⭐️⭐️⭐️ (5/5)
                        <br />
                        review:
                        <br />
                        <a href="https://www.coursera.org/learn/algorithms-part1/home/week/1">
                          link to course
                        </a>
                      </div>
                    )}
                  </li>
                  <li>
                    <a onClick={() => handleCollapseToggle(2)}>
                      Duke Java Specialization
                    </a>
                    {isCollapse2Visible && (
                      <div className="collapse collapse2">
                        rating: ⭐️⭐️⭐️ (3/5)
                        <br />
                        review:
                      </div>
                    )}
                  </li>
                  <li>
                    <a onClick={() => handleCollapseToggle(3)}>
                      Udemy Web Development
                    </a>
                    {isCollapse3Visible && (
                      <div className="collapse collapse3">
                        rating: ⭐️⭐️⭐️⭐️ (4/5)
                        <br />
                        review:
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* <!-- PROJECTS SECTION --> */}
      <section id="projects">
        <div className="container">
          <div className="frame">
            <h2>projects.</h2>
            <div className="separator"></div>
            <CardCarousel cards={ProjectCards()} showNum={8} />
          </div>
        </div>
      </section>

      <hr />

      {/* <!-- MORE ABOUT ME --> */}
      <section id="life">
        <div className="container">
          <div className="frame">
            <h2>more about me.</h2>
            <p>an unasked-for detour into my life and whatnot. sowwie.</p>
            <br />
            <div id="pie">
              <div className="flex-container">
                <PieWheel />
              </div>
            </div>
            <br />
            <div className="flex-container" id="media-reccs">
              <div className="frame2">
                <h3>album rec's 🎶</h3>
                <ul>
                  <li>
                    <a
                      href="https://open.spotify.com/album/3ivhPVStd9RrtczBFwjkMQ?si=-Yzuatf-SuCjwqLtkqtHpA"
                      target="_blank"
                    >
                      pieces
                    </a>{" "}
                    by IU 🧩
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/album/38VzP4yWfHdHafITKKRHEB?si=w243fT0DRQKCrLXwPhemKA"
                      target="_blank"
                    >
                      i've ive
                    </a>{" "}
                    by IVE 💄
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/album/5NVdE7fnUNSfJ7Taka31IF?si=OIWqIKaYTbm0ia2l0Q33JQ"
                      target="_blank"
                    >
                      still blue
                    </a>{" "}
                    by gemini 🎧
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/album/3ZuE680xhR1A4bCFGvL8mi?si=3cyXm8iZTRKQBpP0Kzx9wA"
                      target="_blank"
                    >
                      ~how i'm feeling~
                    </a>{" "}
                    by lauv 🎨
                  </li>
                  <li>
                    moodswings in{" "}
                    <a
                      href="https://open.spotify.com/album/2hPHncbZRuWiCBauEUJxyA?si=CyK70U5ARd-YKjkpeye_vw"
                      target="_blank"
                    >
                      this
                    </a>{" "}
                    (
                    <a
                      href="https://open.spotify.com/album/7vp2iMEQzhNX4sEIUbHpiJ?si=NsaCBMNSQ3OrFAzEeBM_mA"
                      target="_blank"
                    >
                      to
                    </a>
                    ) order by dpr ian 🫐
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/album/18pzJc8GyrVQmunRXrY3ch?si=chcIgB6rQpigMLwftfi9-A"
                      target="_blank"
                    >
                      to love in the 21st century
                    </a>{" "}
                    by lyn lapid 💐
                  </li>
                </ul>
              </div>
              <div className="frame2">
                <h3>media rec's ☔️</h3>
                <ul>
                  <li>
                    🇰🇷: 25 21, misaeng, itaewon class, my mister, hello my 20's
                  </li>
                  <li>
                    🇨🇳: the untamed, love like the galaxy, reset, snow sword
                    stride
                  </li>
                  <li>
                    🇯🇵: your lie in april, jujutsu kaisen, horimiya, attack on
                    titan, parasyte
                  </li>
                  <li>
                    📖: les miserables, wuthering heights, jane eyre, beloved
                  </li>
                </ul>
              </div>
              <div className="frame2">
                <h3>inspiring stuff ✨</h3>
                <ul>
                  <li>
                    "
                    <a
                      target="_blank"
                      href="https://forge.medium.com/youre-not-lazy-bored-or-unmotivated-35891b1f3376"
                    >
                      you're not lazy, bored, or unmotivated
                    </a>
                    "
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://open.spotify.com/show/70tDlUjoCZAFqO7cnuspJW?si=e5dc91fa270b43f8"
                    >
                      stoic coffee break
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://youtu.be/vO1bpod0vKM">
                      7 daily habits
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://good4youth.wordpress.com/">
                      good for youth
                    </a>{" "}
                    advocacy group
                  </li>
                  <li>
                    <em>
                      <a
                        target="_blank"
                        href="https://www.goodreads.com/book/show/25899336-when-breath-becomes-air"
                      >
                        when breath becomes air
                      </a>
                    </em>
                  </li>
                  <li>
                    <em>
                      <a
                        target="_blank"
                        href="https://open.spotify.com/show/70tDlUjoCZAFqO7cnuspJW?si=e5dc91fa270b43f8"
                      >
                        how to win friends and influence people
                      </a>
                    </em>
                  </li>
                </ul>
              </div>
              <div className="frame2">
                <h3>favorite... 🐈</h3>
                <ul>
                  <li>pets: CATS, CORGIS, SAMOYEDS.</li>
                  <li>apps: notion, todoist, dream</li>
                  <li>kaomoji: …ԅ(¯﹃¯ԅ)</li>
                  <li>
                    kpop: enhypen (ddeonuuwu), le sserafim, newjeans, gidle
                  </li>
                  <li>people: linh truong, IU, zhao lusi, my mum, + YOU! 🫶</li>
                </ul>
              </div>
            </div>
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
