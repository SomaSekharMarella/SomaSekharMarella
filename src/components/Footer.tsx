import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const linkedin = 'https://www.linkedin.com/in/soma-sekhar-marella-a16a67302/';
const github = 'https://github.com/SomaSekharMarella';
const leetcode = 'https://leetcode.com/u/klu2300030411/';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__social">
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode />
          </a>
        </div>
        <p className="footer__copy">
          © {year} Soma Sekhar Marella. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}
