import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/fb.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">© 2025 Supersite, Powered by News API</p>
      <div className="footer__icons-links">
        <div className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://www.tripleten.com/"
            className="footer__link"
            target="_blank"
          >
            Tripleten
          </a>
        </div>
        <div className="footer__icons">
          <a
            className="footer__icons-link"
            href="https://github.com/joseidd"
            target="_blank"
          >
            <img src={githubIcon} alt="github link"></img>
          </a>

          <a
            className="footer__icons-link"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <img src={facebookIcon} alt="facebook page" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
