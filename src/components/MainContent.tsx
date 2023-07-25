/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CardCarousel from "./CardCarousel";
import ProjectCards from "./ProjectCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as api from "@/utils";
import Link from "next/link";

const MainContent = () => {
  const [isCollapse1Visible, setIsCollapse1Visible] = useState(false);
  const [isCollapse2Visible, setIsCollapse2Visible] = useState(false);
  const [isCollapse3Visible, setIsCollapse3Visible] = useState(false);

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

  useEffect(() => {
    api.listPagesFromNotion();
  }, []);

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
              src="/images/pfp.jpg"
              className="crop"
              alt="joyce chen"
              width={230}
              height={230}
            />
            <div className="separator"></div>

            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <Image
                    src="/images/mail.png"
                    className="crop2"
                    alt="email-icon"
                    width={30}
                    height={30}
                  />
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
                  <Image
                    src="/images/laptop.png"
                    className="crop2"
                    alt="email-icon"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Education</p>
                  <p className="contact-link">UCLA Computer Science '26</p>
                </div>
              </li>

              <div className="my-links">
                <a href="https://github.com/joycechen721" target="_blank">
                  <span className="circle">
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/joycechen12/"
                  target="_blank"
                >
                  <span className="circle"></span>
                </a>
                {/* <!-- <a href = "https://bit.ly/joycechenresume" target="_blank"><span className="circle">
            <i className="fa-solid fa-file-csv"></i>
          </span></a> --> */}
                <a
                  href="https://open.spotify.com/user/aa5970or7sdjkclmzp1wwnj1b"
                  target="_blank"
                >
                  <span className="circle">
                    <i className="fa-brands fa-spotify"></i>
                  </span>
                </a>
              </div>
            </ul>
          </div>

          <div className="right-landing">
            <div className="frame">
              <h2>intro 👋</h2>
              <p>
                Hello hello~ it's Joyce, your friendly neighborhood cat-lover
                and 2nd-year UCLA undergrad majoring in <b>computer science</b>!
                From developing full-stack apps to tackling challenging class
                projects, I love the way coding enhances my problem-solving
                skills and allows for limitless creativity :{`)`} My lifelong
                goal is to create technology that sparks positive change in this
                world, whether it be simple daily tools or apps that
                revolutionize society! 🌎❤️
                <br />
                Beyond coding, some of my hobbies include reading, journaling,
                window shopping, and cafe hopping. Hit me up if you need korean
                drama reccomendations...or just a fellow hopeless romantic to
                confide in :,{")"} Also, I'm always looking for gym buddies to
                become strong muscle mommies with. Now enough with this
                long-winded intro, let's keep scrolling ~
              </p>
            </div>
            {/*  */}
            <div className="frame">
              <h2>
                <em>currently...</em>
              </h2>
              <ul>
                <li className="flower-item">
                  interning as a swe at{" "}
                  <a
                    href="https://www.perfectcorp.com/business"
                    target="_blank"
                  >
                    Perfect Corp
                  </a>
                  , an AR beauty tech company based in taipei!
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
                  working on this website 💖 also open to any fun opportunities!
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
                  <a href="https://codingtomorrow.org/" target="_blank">
                    Perfect Corp.
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>Software Engineer Intern, June '23 - Present</mark>
                    <p>Description.</p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3>
                  <a href="https://codingtomorrow.org/" target="_blank">
                    Daily Bruin
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>Software Engineer Intern, Sept. '22 - Present</mark>
                    <p>Description.</p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3>
                  <a href="https://codingtomorrow.org/" target="_blank">
                    LA Blueprint
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>Software Developer, Sept. '22 - Present</mark>
                    <p>Description.</p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3>
                  <a href="https://superposition.tech/" target="_blank">
                    Superposition
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>Superposition VI Operations, June '22</mark>
                    <p>
                      The 6th iteration of{" "}
                      <a href="https://superposition-vi.devpost.com/">
                        Bay Area's largest gender-focused hackathon
                      </a>{" "}
                      for high school and college students. Organized guest
                      speakers and judged all 20+ project submissions.
                    </p>
                  </li>
                  <li className="flower-item">
                    <mark>Uberposition HackerX, Oct. '21</mark>
                    <p>
                      A one-week, entirely{" "}
                      <a href="https://uberposition-1.devpost.com/">
                        Uber-sponsored business hackathon
                      </a>{" "}
                      with 550+ attendees (41% beginners). 2 submission tracks -
                      technical and business. #DriveInnovation!
                    </p>
                  </li>
                  <li className="flower-item">
                    <mark>Chapter Manager, '21-22</mark>
                    <p>
                      Facilitates 125 chapters across 19 countries & 18 US
                      states; Executes ideas for chapter bonding, integration,
                      and inclusion like monthly "chapter conferences."
                    </p>
                  </li>
                  <li className="flower-item">
                    <mark>Fremont Chapter Tech Team, '20-22</mark>
                    <p>
                      Empowers girls in STEM in FUSD; Taught HTML/CSS to 25+
                      5th-8th graders; Coordinated "STEAM Week" speaker panel &
                      the “Terris Challenge,” a 2-week STEMathon.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3>
                  <a
                    href="https://ahscsfirst.github.io/csfirst/"
                    target="_blank"
                  >
                    Google CS First Club
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>President, '21-22</mark>
                    <p>
                      Hosted weekly coding practice sessions and
                      career-exploration events (speaker panels, workshops) for
                      students at American High School interested in computer
                      science.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="skill-row">
                <h3>
                  <a href="https://codingtomorrow.org/" target="_blank">
                    Coding Tomorrow Initiative
                  </a>
                </h3>
                <ul>
                  <li className="flower-item">
                    <mark>AHS Chapter President, '21-22</mark>
                    <p>
                      Directed multiple free virtual classes on web design,
                      Python, and Java programming. Recruited 15+ high school
                      volunteers & taught 150+ students across the Fremont
                      school district.
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
                <li>languages: java, javascript, c++, python</li>
                <li>frontend: html/css, jquery, react</li>
                <li>
                  backend: nodejs, express, mysql, nextjs, hibernate, stripe,
                  spring
                </li>
                <li>other technologies: rest api's, firebase, git/github</li>
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
                  <Link href="/courses/math32a">Math 32A</Link>
                </div>
                <div className="">
                  <Link href="/courses/math32b">Math 32B</Link>
                </div>
                <div className="">
                  <Link href="/courses/math33a">Math 33A</Link>
                </div>
                <div className="">
                  <Link href="/courses/math61">Math 61</Link>
                </div>
                <div className="">
                  <Link href="/courses/physics1b">Physics 1B</Link>
                </div>
                <div className="">
                  <Link href="/courses/geog5">Geog 5</Link>
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
            <CardCarousel cards={ProjectCards()} showNum={3} />
          </div>
        </div>
      </section>

      <hr />

      {/* <!-- MORE ABOUT ME --> */}
      <section id="life">
        <div className="container">
          <div className="frame">
            <h2>more about me.</h2>
            <p>
              an unasked-for detour into my life and whatnot. tea {">"} coffee.{" "}
            </p>
            <br />
            <div id="pie">
              <div className="flex-container">
                <div className="pie">
                  <img className="box" src="images/pie.png" alt="" />
                  <button type="button" name="button" className="spin">
                    ⇨
                  </button>
                </div>
                <div id="achievements" className="frame piedesc">
                  <h2>achievements</h2>
                  <p>
                    awards minus scholarships from other colleges b/c ucla
                    didn't give me any ;-;
                  </p>
                  <ul>
                    <li>
                      1st Place Instrumental Solo - US Open Music Competition
                    </li>
                    <li>
                      State Solo Festival Superior Rating - California Music
                      Educators Association
                    </li>
                    <li>
                      ABRSM Grade 8 Flute with Distinction (awarded 32 credits
                      @Level 3)
                    </li>
                    <li>President's Volunteer Gold Service Award</li>
                    <li>
                      American High School Academic Block Award, Academic Honor
                      Pin
                    </li>
                    <li>2x AP Scholar with Distinction</li>
                  </ul>
                  <p>and manifesting for future achievements...</p>
                  <p>
                    let's get scholarships, an internship, and good grades
                    please 🥹
                  </p>
                </div>
                {/* <div id="workshops" className="frame piedesc">
                  <h2>workshops</h2>
                  <ul>
                    <li>
                      none yet, work in progress! here's some placeholder text
                      that i will get back to.
                    </li>
                  </ul>
                </div>
                <div id="teaching" className="frame piedesc">
                  <h2>teaching</h2>
                  <ul>
                    <li>
                      none yet, work in progress! here's some placeholder text
                      that i will get back to.
                    </li>
                  </ul>
                </div>
                <div id="music" className="frame piedesc">
                  <h2>music</h2>
                  <p>
                    for half of my life, I lived and breathed in concerts and
                    performances 🥳{" "}
                  </p>
                  <p>
                    the best thing about music is the community of people you
                    find, who you can rant about practicing 40 hours with or
                    relate to from getting roasted by your music teacher :D oh!
                    and also make cool music together!
                  </p>
                  <ul>
                    <li>
                      2.2.2017 - Taipei National Concert Hall, TMJH Wind
                      Ensemble
                    </li>
                    <li>
                      i seriously can't remember...there are too many. will
                      update sometime.
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <br />
            <div className="flex-container" id="media-reccs">
              <div className="frame2">
                <h3>media rec's ☔️</h3>
                <ul>
                  <li>
                    kdramas: 25 21, misaeng, itaewon class, my mister, yumi's
                    cells, hello my 20's
                  </li>
                  <li>
                    anime: your lie in april, jujutsu kaisen, horimiya, attack
                    on titan, parasyte
                  </li>
                  <li>
                    books: les miserables, wuthering heights, jane eyre, pride &
                    prejudice (the classics are truly classic)
                  </li>
                  <li>
                    manhwa: tower of god, lookism, seasons of blossom, remarried
                    empress
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
                    </a>{" "}
                    podcast
                  </li>
                  <li>
                    <a target="_blank" href="https://youtu.be/vO1bpod0vKM">
                      7 daily habits (projectElon)
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://good4youth.wordpress.com/">
                      good for youth
                    </a>{" "}
                    advocacy group
                  </li>
                </ul>
              </div>
              <div className="frame2">
                <h3>album rec's 🎶</h3>
                <ul>
                  <li>moodswings in this (to) order by dpr ian</li>
                  <li>~how i'm feeling~ by lauv</li>
                  <li>planet her by doja cat</li>
                  <li>palette & love poem by iu</li>
                  <li>border: carnival by enhypen</li>
                </ul>
              </div>
              <div className="frame2">
                <h3>fav's ☕️</h3>
                <ul>
                  <li>cats & corgis. samoyeds too.</li>
                  <li>apps: notion, todoist, dream</li>
                  <li>kaomoji: Fooooood…ԅ(¯﹃¯ԅ)</li>
                  <li>
                    kpop: enhypen (ddeonuuwu), le sserafim, newjeans, gidle
                  </li>
                  <li>
                    role models: linh truong, IU, leahsfieldnotes, zhao lusi, my
                    mom!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className="container blog">
          <div className="frame">
            <h2>blog & rants.</h2>
            <div className="separator"></div>
            <div id="blog">
              {/* <table>
          <tr>
          </tr>
        </table> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
