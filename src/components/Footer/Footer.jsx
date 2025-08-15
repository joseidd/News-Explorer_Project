import githubIcon from "../../assets/github.svg";
import instagramIcon from "../../assets/instagram-black.png";
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
            href="https://www.linkedin.com/in/jose-duran-338a34189/"
            className="footer__link"
            target="_blank"
          >
            Linkedin
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
            className="footer__icons-instagram"
            href="https://www.instagram.com/j.durann99/profilecard/?igsh=MWVpeG9leXE1ZGQwcw=="
            target="_blank"
          >
             <img  src={instagramIcon} alt="instagram link"></img>
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
