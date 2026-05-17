"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footerCustom">
      <div className="container footerCustomInner">
        <div className="footerBox">
          <h3>Orari</h3>

          <div className="footerTextGroup">
            <p className="footerStrong">Dal Lunedì al Venerdì</p>
            <p>9:00 / 12:30</p>
            <p>15:00 / 19:00</p>
          </div>

          <div className="footerTextGroup">
            <p className="footerStrong">Sabato</p>
            <p>9:00 / 12:30</p>
            <p>15:00 / 17:30</p>
          </div>
        </div>

        <div className="footerBox">
          <h3>Contatti</h3>

          <ul className="footerContacts">
            <li>
              <FaMapMarkerAlt />
              <span>Via Alfieri, 8 – Orbassano</span>
            </li>

            <li>
              <FaPhoneAlt />
              <span>011-9005113 / 393-9892078</span>
            </li>

            <li>
              <FaEnvelope />
              <a href="mailto:info@libertycase.it">
                info@libertycase.it
              </a>
            </li>
          </ul>
        </div>

        <div className="footerBox">
          <h3>Social</h3>

          <ul className="footerSocial">
            <li>
              <a
                href="https://www.facebook.com/libertycaseorbassano/?locale=it_IT"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
                <span>Facebook</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/libertycaseorbassano/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/3939892078"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}