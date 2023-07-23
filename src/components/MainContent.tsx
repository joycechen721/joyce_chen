/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function MainContent() {
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
                    href="mailto:joycechen721@ucla.g.edu"
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
                <a href="https://github.com/winterberry123" target="_blank">
                  <span className="circle">
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/joycechen12/"
                  target="_blank"
                >
                  <span className="circle">
                    <i className="fa-brands fa-linkedin"></i>
                  </span>
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
                Hello hello ~ I'm Joyce, your friendly neighborhood cat-lover
                and a second-year UCLA undergrad majoring in{" "}
                <b>computer science</b>! From building full-stack web apps to
                tackling challenging class projects, I absolutely love coding up
                products that let my creativity run wild and stimulate my
                problem solving skills :{`)`} Transforming lines of code into
                something tangible and impactful - yes, that is one big source
                of serotonin.
                <br />
                Beyond just coding, I hope to build technology that touches
                lives and sparks positive change in the world~ Whether it's
                developing a simple app that simplifies daily tasks, or building
                a beautiful full-fledged project, I desire to leave a lasting
                mark that matters. Now enough with this cheesy intro, let's keep
                scrolling! 🌎 🫶
              </p>
            </div>
            <div className="frame">
              <h2>
                <em>currently...</em>
              </h2>
              <ul>
                <li className="flower-item"></li>
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
                      with 550+ attendees (41% beginners). 2 submission tracks –
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
                  <a href="/cs31">CS 31</a>
                </div>
                <div className="">
                  <a href="#">CS 32</a>
                </div>
                <div className="">
                  <a href="#">CS 33</a>
                </div>
                <div className="">
                  <a href="#">CS 35L</a>
                </div>
                <div className="">
                  <a href="#">Math 32A</a>
                </div>
                <div className="">
                  <a href="#">Math 32B</a>
                </div>
                <div className="">
                  <a href="#">Math 33A</a>
                </div>
                <div className="">
                  <a href="#">Math 61</a>
                </div>
                <div className="">
                  <a href="#">Physics 1B</a>
                </div>
                <div className="">
                  <a href="#">Geog 5</a>
                </div>
              </div>

              <br />

              <div className="other-courses">
                <h3>online courses 💻</h3>
                <ul>
                  <li>
                    <a id="algo1">Algorithms Part I - Princeton Coursera</a>
                    <div className="collapse collapse1">
                      rating: ⭐️⭐️⭐️⭐️⭐️ (5/5)
                      <br />
                      review:
                      <br />
                      <a href="https://www.coursera.org/learn/algorithms-part1/home/week/1">
                        link to course
                      </a>
                    </div>
                  </li>
                  <li>
                    <a id="duke">Duke Java Specialization</a>
                    <div className="collapse collapse2">
                      rating: ⭐️⭐️⭐️ (3/5)
                      <br />
                      review:
                    </div>
                  </li>
                  <li>
                    <a id="udemy">Udemy Web Development</a>
                    <div className="collapse collapse3">
                      rating: ⭐️⭐️⭐️⭐️ (4/5)
                      <br />
                      review:
                    </div>
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
            <div className="project-cards">
              <button type="button" className="button1">
                {" "}
                ⇦{" "}
              </button>
              <div className="card" id="0">
                <img src="images/GUI.png" alt="" />
                <h3>3D-SMT GUI</h3>
                <p>
                  A graphical user interface powered by MATLAB. Plots
                  fluorescence intensity & lifetime data from 3D single-molecule
                  tracking instruments. Uses the ebFRET library, which analyzes
                  a molecule’s time traces using a hidden Markov model and
                  derives its DNA transition state probabilities.
                </p>
              </div>
              <div className="card" id="1">
                <img src="images/universify.png" alt="" />
                <h3>Universify</h3>
                <p>
                  A web-app that helps high schoolers organize college
                  application materials, because essays & college spreadsheets &
                  resume's get messy super quickly (from personal experience).
                  Currently still work in progress, but here's the{" "}
                  <a href="https://bit.ly/joycec_universifyprototype">
                    prototype
                  </a>
                  .
                </p>
              </div>
              <div className="card" id="2">
                <img src="images/terris.png" alt="" />
                <h3>Other Miscellaneous</h3>
                <p>
                  Developed websites for a couple different organizations and
                  events over the past few years.
                </p>
                <br />
                <p>
                  🌐{" "}
                  <a href="https://www.spfremont.org/">
                    Superposition Fremont site
                  </a>
                </p>
                <p>
                  🌐{" "}
                  <a href="https://demoterris.merylmathew.repl.co/index.html">
                    Terris Challenge site
                  </a>
                </p>
                <p>
                  🌐{" "}
                  <a href="https://ahscsfirst.github.io/csfirst/">
                    CS First site
                  </a>
                </p>
              </div>
              <button type="button" className="button2">
                {" "}
                ⇨{" "}
              </button>
            </div>
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
                    kdramas: 25 21, misaeng, itaewon className, my mister,
                    yumi's cells, hello my 20's
                  </li>
                  <li>
                    anime: your lie in april, great pretender, horimiya, attack
                    on titan, parasyte
                  </li>
                  <li>manhwa: seasons of blossom, remarried empress</li>
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
                    kpop: enhypen (ddeonuu!), le sserafim, newjeans, gidle
                  </li>
                  <li>youtubers: linh truong, dustin vuong, leahsfieldnotes</li>
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
}
