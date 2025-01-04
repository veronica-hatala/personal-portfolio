import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactMe() {
    return (
      <section id="Contact" className="section contact-section">
          <h2 className="section-heading contact-heading">Contact Me</h2>
          <p className="contact-content">
            <a className="contact-info" href="mailto:veronica.hatala@gmail.com">
                <MdEmail />
            </a>
            <a className="contact-info" href="https://www.linkedin.com/in/veronica-hatala/">
                <FaLinkedin />
            </a>
            <a className="contact-info" href="https://github.com/veronica-hatala">
                <FaGithub />
            </a>
          </p>
      </section>
    );
  }