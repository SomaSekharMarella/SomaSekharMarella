import { FaBriefcase, FaUsers } from 'react-icons/fa';
import { Section } from './Section';

const roles = [
  {
    title: 'President – The Blockchain Hub (KL University)',
    description: 'Leading blockchain initiatives, organizing workshops, and mentoring students.',
    Icon: FaUsers,
  },
];

export function Experience() {
  return (
    <Section id="experience" className="experience">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        <p className="section-sub">Leadership and hands-on development</p>
        <ul className="experience__list">
          {roles.map(({ title, description, Icon }) => (
            <li key={title} className="experience__item glass-card">
              <div className="experience__icon-wrap" aria-hidden>
                <Icon />
              </div>
              <div>
                <h3 className="experience__title">{title}</h3>
                <p className="experience__desc">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
