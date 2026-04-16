import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { useTypingRoles } from '../hooks/useTypingRoles';
import { BlockchainNetworkVisual } from './BlockchainNetworkVisual';

const ROLES = [
  'Blockchain Developer',
  'Web3 Engineer',
  'DevOps Engineer',
  'Full Stack Developer',
] as const;

const GITHUB = 'https://github.com/SomaSekharMarella';
const LINKEDIN = 'https://www.linkedin.com/in/soma-sekhar-marella-a16a67302/';
const RESUME = '/SomaSekharResume.pdf';

export function Hero() {
  const typed = useTypingRoles(ROLES);

  const scrollTo = (sel: string) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden />
      <div className="hero__glow-text" aria-hidden />

      <div className="hero__inner container">
        <div className="hero__grid">
          <div className="hero__col hero__col--text">
            <motion.p
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              className="hero__title hero__title--display"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Soma Sekhar Marella
            </motion.h1>
            <motion.p
              className="hero__tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
            >
              <span className="hero__typed" aria-live="polite">
                {typed}
                <span className="hero__cursor" aria-hidden>
                  |
                </span>
              </span>
            </motion.p>
            <motion.p
              className="hero__lede"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
            >
              I build scalable decentralized applications, full-stack systems, and cloud-native
              solutions.
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
            >
              <button type="button" className="btn btn--primary" onClick={() => scrollTo('#projects')}>
                View Projects
              </button>
              <a href={RESUME} download className="btn btn--ghost btn--glass">
                <FaDownload aria-hidden />
                Download Resume
              </a>
            </motion.div>
            <motion.div
              className="hero__social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.58 }}
            >
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__icon-link"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__icon-link"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          <div className="hero__col hero__col--visual">
            <BlockchainNetworkVisual />
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        className="hero__scroll hero__scroll--animated"
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="hero__scroll-ring" aria-hidden />
        <HiOutlineArrowDown />
      </motion.button>
    </section>
  );
}
