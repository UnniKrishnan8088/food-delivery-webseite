import "./footer.scss";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <footer>
      <div className="contents">
        <div className="footer__logo">
          <img src="/footer-logo.png" alt="" />
        </div>
        <div className="footer__details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            libero viverra dapibus odio sit malesuada in quis. Arcu tristique
            elementum viverra integer id.
          </p>
          <div className="social__medias">
            <button>
              <TiSocialFacebook />
            </button>
            <button>
              <TiSocialTwitter />
            </button>
            <button>
              <TiSocialLinkedin />
            </button>
            <button>
              <IoLogoInstagram />
            </button>
          </div>
        </div>
      </div>
      <div className="contents">
        <h4>Opening Restaurant</h4>
        <ul>
          <li>Sat-Wet: 09:00am-10:00PM</li>
          <li>Thursdayt: 09:00am-11:00PM</li>
          <li>Friday: 09:00am-8:00PM</li>
        </ul>
      </div>
      <div className="contents">
        <h4>User Link</h4>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Order Delivery</li>
          <li>Payment & Tex</li>
          <li>Terms of Services</li>
        </ul>
      </div>
      <div className="contents">
        <h4>Contact Us</h4>
        <div className="footer__content">
          <ul>
            <li>1234 Country Club Ave</li>
            <li>NC 123456, London, UK</li>
            <li>+0123 456 7891</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
