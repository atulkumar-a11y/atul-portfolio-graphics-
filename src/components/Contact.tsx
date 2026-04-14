import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/atul-kumar-213691177/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — atulkumar
              </a>
            </p>
            <p>
              <a
                href="mailto:Katul509@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — Katul509@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+918178532535" data-cursor="disable">
                Phone — +91 8178532535
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/918178532535"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <FaWhatsapp style={{ fontSize: "20px" }} /> 
                WhatsApp — +91 8178532535
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Delhi University (Perusing)
            </p>
            <p>
              Designing NSIC Gobindpuri
            </p>
            <p>
              XII at the NIOS Noida, X at D.I. Khan B.S Senior Secondary School, Delhi
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://Myportfolio.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/atul-kumar-213691177/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/imbunny729_xoxo/?hl=en"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.behance.net/Atul_kumar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="https://github.com/atulkumar-a11y"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Atul Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
