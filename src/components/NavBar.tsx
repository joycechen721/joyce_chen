export default function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-list" id="topNav">
        <li className="home-icon">
          <a href="/">
            <img src="/images/logo.png" className="icon" />
          </a>
        </li>
        <li className="nav-link">
          <a href="/#blog">blog ༺</a>
        </li>
        <li className="nav-link">
          <a href="/#life">life ఌ</a>
        </li>
        <li className="nav-link">
          <a href="/#projects">projects 𖧧</a>
        </li>
        <li className="nav-link">
          <a href="/#xp">experience 𖤐</a>
        </li>
        <li className="menu">
          <i className="fa fa-bars"></i>
        </li>
      </ul>
    </div>
  );
}
