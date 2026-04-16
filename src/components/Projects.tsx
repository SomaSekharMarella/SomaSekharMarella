import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLeaf, FaLink } from 'react-icons/fa';
import { Section } from './Section';

const projects = [
  {
    title: 'AgriTrace',
    description:
      'Blockchain-based supply chain system ensuring transparency and traceability across agricultural products.',
    metrics: 'Achieved complete data immutability and improved tracing efficiency by 40%.',
    stack: ['Solidity', 'React', 'Ethereum'],
    live: 'https://supply-chain-management-system-steel.vercel.app/',
    github: 'https://github.com/SomaSekharMarella/Supply-Chain',
    gradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
    Icon: FaLeaf,
  },
  {
    title: 'Simera – PoW Crowdfunding',
    description:
      'Decentralized crowdfunding system using proof-of-work validation for fair, transparent contributions.',
    metrics: 'Secured smart contracts mitigating Sybil attacks with optimized gas usage.',
    stack: ['Solidity', 'Hardhat', 'React'],
    live: 'https://project-simera.vercel.app/',
    github: 'https://github.com/SomaSekharMarella/Project-Simera',
    gradient: 'linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)',
    Icon: FaLink,
  },
];

export function Projects() {
  return (
    <Section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <p className="section-sub">Production-minded builds — live demos and open source.</p>
        <div className="projects__grid">
          {projects.map((p, index) => {
            const Icon = p.Icon;
            return (
              <motion.article
                key={p.title}
                className="project-card project-card--premium glass-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.015 }}
              >
                <div 
                  className="project-card__thumbnail"
                  style={{ background: p.gradient }}
                >
                  <Icon className="project-card__thumbnail-icon" aria-hidden />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.description}</p>
                  <p className="project-card__metrics"><strong>Impact:</strong> {p.metrics}</p>
                  <div className="project-card__tags">
                    {p.stack.map((t) => (
                      <span key={t} className="tag tag--premium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__actions">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--sm project-card__btn"
                    >
                      <FaExternalLinkAlt aria-hidden />
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost btn--sm btn--glass project-card__btn"
                    >
                      <FaGithub aria-hidden />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
