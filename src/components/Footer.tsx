import { FaGithub, FaLinkedin } from 'react-icons/fa';

const linkedin = 'https://www.linkedin.com/in/soma-sekhar-marella-a16a67302/';
const github = 'https://github.com/SomaSekharMarella';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} Soma Sekhar Marella. Built with React & Vite.
        </p>
        <div className="footer__social">
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
