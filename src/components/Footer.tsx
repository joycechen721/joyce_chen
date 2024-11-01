const Footer = () => {
  const currDate: Date = new Date();
  const year: number = currDate.getFullYear();

  return (
    <>
      <div className="footer">
        <div className="main-footer">
          <p>
            <b>© {year} Joyce Chen 💛 </b>
            <em>~decide to be extra(ordinary)~</em>
          </p>
          <div className="footer-links">
            <a className="footer-link" href="mailto:joycechen721@ucla.g.edu">
              email
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/joycechen721/"
              target="_blank"
            >
              linkedin
            </a>
            <a className="footer-link" target="_blank" href="https://github.com/joycechen721">
              github
            </a>
          </div>
        </div>

        <img src="/images/main/kittypeep.png" alt="" />
      </div>
    </>
  );
};

export default Footer;
