/* eslint-disable react/no-unescaped-entities */
const ProjectCards = () => {
  const gui = (
    <div className="" id="1">
      <img src="images/GUI.png" alt="" />
      <h3>3D-SMT GUI</h3>
      <p>
        A graphical user interface powered by MATLAB. Plots fluorescence
        intensity & lifetime data from 3D single-molecule tracking instruments.
        Uses the ebFRET library, which analyzes a molecule's time traces using a
        hidden Markov model and derives its DNA transition state probabilities.
      </p>
    </div>
  );

  const universify = (
    <div className="" id="2">
      <img src="images/universify.png" alt="" />
      <h3>Universify</h3>
      <p>
        A web-app that helps high schoolers organize college application
        materials, because essays & college spreadsheets & resume's get messy
        super quickly (from personal experience). Currently still work in
        progress, but here's the{" "}
        <a href="https://bit.ly/joycec_universifyprototype">prototype</a>.
      </p>
    </div>
  );

  const misc = (
    <div className="" id="3">
      <img src="images/terris.png" alt="" />
      <h3>Other Websites</h3>
      <p>
        Developed websites for a couple different organizations and events over
        the past few years.
      </p>
      <br />
      <p>
        🌐 <a href="https://www.spfremont.org/">Superposition Fremont site</a>
      </p>
      <p>
        🌐{" "}
        <a href="https://demoterris.merylmathew.repl.co/index.html">
          Terris Challenge site
        </a>
      </p>
      <p>
        🌐 <a href="https://ahscsfirst.github.io/csfirst/">CS First site</a>
      </p>
      <p>
        🌐 <a href="https://github.com/dailybruin/flamingo">Daily Bruin site</a>
      </p>
    </div>
  );

  const fotc = (
    <div className="" id="4">
      <img src="images/fotc.png" alt="" />
      <h3>Friends of the Children</h3>
      <p>
        A web app that serves as a resource bank for Friends of the Children
        (Los Angeles).
        <a href="https://bit.ly/joycec_universifyprototype">GitHub</a>.
      </p>
    </div>
  );

  const mapify = (
    <div className="" id="5">
      <img src="images/mapify.png" alt="" />
      <h3>Mapify</h3>
      <p>
        A web app that serves as a resource bank for Friends of the Children
        (Los Angeles).
        <a href="https://bit.ly/joycec_universifyprototype">GitHub</a>.
      </p>
    </div>
  );

  const bruinshare = (
    <div className="" id="6">
      <img src="images/bruinshare.png" alt="" />
      <h3>BruinShare</h3>
      <p>
        A web app that serves as a resource bank for Friends of the Children
        (Los Angeles).
        <a href="https://bit.ly/joycec_universifyprototype">GitHub</a>.
      </p>
    </div>
  );

  const peachparty = (
    <div className="" id="7">
      <img src="images/peachparty.png" alt="" />
      <h3>Peach Party</h3>
      <p>
        A web app that serves as a resource bank for Friends of the Children
        (Los Angeles).
        <a href="https://bit.ly/joycec_universifyprototype">GitHub</a>.
      </p>
    </div>
  );

  return [fotc, bruinshare, mapify, gui, peachparty, misc, universify];
};

export default ProjectCards();
