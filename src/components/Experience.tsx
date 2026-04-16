import { FaLaptopCode, FaUsers } from 'react-icons/fa';
import { Section } from './Section';

const roles = [
  {
    title: 'President – The Blockchain Hub (KL University)',
    date: '2023 - Present',
    Icon: FaUsers,
    achievements: [
      'Orchestrated university-wide blockchain initiatives and hackathons, engaging 200+ students.',
      'Mentored members on Web3 fundamentals, Solidity, and DApp development through weekly hands-on sessions.',
      'Led the architecture and deployment of internal projects, optimizing team workflows and collaboration.',
    ],
  },
  {
    title: 'Full Stack Web3 Developer',
    date: '2024 - Present',
    Icon: FaLaptopCode,
    achievements: [
      'Developed and deployed scalable decentralized applications using React, Vite, and Solidity.',
      'Authored secure smart contracts on Ethereum, focusing on gas optimization and security best practices.',
      'Integrated modern cloud infrastructure and DevOps pipelines to ensure robust continuous deployment.',
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="experience">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        <p className="section-sub">Leadership and hands-on development</p>
        <div className="timeline">
          {roles.map(({ title, date, achievements, Icon }, index) => (
            <div key={title} className="timeline__item">
              <div className="timeline__marker">
                <div className="timeline__icon-wrap">
                  <Icon aria-hidden />
                </div>
                {index !== roles.length - 1 && <div className="timeline__line" />}
              </div>
              <div className="timeline__content glass-card">
                <div className="timeline__header">
                  <h3 className="timeline__title">{title}</h3>
                  <span className="timeline__date">{date}</span>
                </div>
                <ul className="timeline__bullets">
                  {achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
