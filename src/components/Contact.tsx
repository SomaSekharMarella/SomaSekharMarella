import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Section } from './Section';

const email = '2300030411cseelge@gmail.com';
const linkedin = 'https://www.linkedin.com/in/soma-sekhar-marella-a16a67302/';
const github = 'https://github.com/SomaSekharMarella';

export function Contact() {
  return (
    <Section id="contact" className="contact">
      <div className="container">
        <h2 className="section-heading">Contact</h2>
        <p className="section-sub">Let&apos;s connect</p>
        <div className="contact__card glass-card">
          <ul className="contact__list">
            <li>
              <a href={`mailto:${email}`} className="contact__link">
                <FaEnvelope className="contact__icon" aria-hidden />
                <span>{email}</span>
              </a>
            </li>
            <li>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <FaLinkedin className="contact__icon" aria-hidden />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer" className="contact__link">
                <FaGithub className="contact__icon" aria-hidden />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
