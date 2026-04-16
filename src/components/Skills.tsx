import type { IconType } from 'react-icons';
import {
  FaAws,
  FaChalkboardTeacher,
  FaComments,
  FaEthereum,
  FaJava,
  FaSyncAlt,
  FaUserTie,
} from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import {
  SiC,
  SiDocker,
  SiEthereum,
  SiGit,
  SiGithub,
  SiJenkins,
  SiKubernetes,
  SiMysql,
  SiPostman,
  SiPython,
  SiReact,
  SiSolidity,
  SiSpring,
  SiWebpack,
} from 'react-icons/si';
import { Section } from './Section';

type SkillGroup = {
  title: string;
  items: { name: string; Icon: IconType }[];
};

const groups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'C', Icon: SiC },
      { name: 'Java', Icon: FaJava },
      { name: 'Python', Icon: SiPython },
      { name: 'Solidity', Icon: SiSolidity },
    ],
  },
  {
    title: 'Technologies',
    items: [
      { name: 'Blockchain', Icon: SiEthereum },
      { name: 'Smart Contracts', Icon: SiSolidity },
      { name: 'Web Development', Icon: SiReact },
      { name: 'ReactJS', Icon: SiReact },
      { name: 'Spring Boot', Icon: SiSpring },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'DevOps', Icon: SiDocker },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Ethereum', Icon: FaEthereum },
      { name: 'Hardhat', Icon: SiWebpack },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Postman', Icon: SiPostman },
      { name: 'Jenkins', Icon: SiJenkins },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'AWS', Icon: FaAws },
    ],
  },
  {
    title: 'Interests And Soft Skills',
    items: [
      { name: 'Building scalable decentralized applications (DApps)', Icon: SiEthereum },
      { name: 'Communication', Icon: FaComments },
      { name: 'Leadership', Icon: FaUserTie },
      { name: 'Team Collaboration', Icon: GiTeamIdea },
      { name: 'Mentoring', Icon: FaChalkboardTeacher },
      { name: 'Adaptability', Icon: FaSyncAlt },
    ],
  },

];

/** Recruiter-oriented skill grid: clear categories, icons, premium card hover. */
export function Skills() {
  return (
    <Section id="skills" className="skills">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <p className="section-sub">
          Structured for quick scanning — languages, stack, tooling, and how I work with teams.
        </p>
        <div className="skills__grid skills__grid--premium">
          {groups.map((group) => (
            <div key={group.title} className="skills__card glass-card skills__card--lift">
              <h3 className="skills__group-title">{group.title}</h3>
              <ul className="skills__list">
                {group.items.map(({ name, Icon }) => (
                  <li key={name} className="skills__item">
                    <span className="skills__icon-wrap">
                      <Icon className="skills__icon" aria-hidden />
                    </span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
