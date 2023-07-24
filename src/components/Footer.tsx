export default function Footer() {
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
            <a className="footer-link" href="https://www.linkedin.com/">
              linkedIn
            </a>
            {/* <!-- <a className="footer-link" href="https://bit.ly/joycechenresume">resume</a> --> */}
            <a
              className="footer-link"
              href="https://joycechen-newsletter.herokuapp.com/"
            >
              newsletter
            </a>
          </div>
        </div>

        <img src="/images/kittypeep.png" alt="" />
      </div>

      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="/index.js"></script>
      <script
        src="https://kit.fontawesome.com/8cf230ce72.js"
        crossOrigin="anonymous"
      ></script> */}
    </>
  );
}

export default Footer;
