import React from "react";
import "./footer.css";
// import ReactBootstrap, {Nav, Butto/n, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className="footerdiv">
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">
            <b>KHANA SHANA</b>
          </h1>

          <h2>
            <b>CONTACT</b>
          </h2>

          <address>
            122 Tipu Block, Garden Town, Lahore.
            <br />
            +92 3009493838
            <br />
            uzma.masood123@gmail.com
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">
              <b>Information</b>
            </h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Menu</a>
              </li>

              <li>
                <a href="#">Our Services</a>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">
              <b>Social Media</b>
            </h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Instagram</a>
              </li>

              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">
              <b>HOURS</b>
            </h2>

            <ul className="nav__ul">
              <li>Monday-Friday 12PM-9PM</li>

              <li>Saturday-Sunday 12PM-12AM</li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; CS 360 - Khana Shana.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
