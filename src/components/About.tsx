import { Section } from './Section';

export function About() {
  return (
    <Section id="about" className="about">
      <div className="container">
        <h2 className="section-heading">About</h2>
        <p className="section-sub">Who I am and what drives my work</p>
        <div className="about__card glass-card about__card--accent">
          <p>
            Soma Sekhar Marella is a B.Tech student specializing in Blockchain Engineering with
            strong experience in Web3 and full-stack development. He has been actively building
            decentralized applications and exploring real-world blockchain use cases for over two
            years.
          </p>
          <p>
            As the President of The Blockchain Hub, he leads technical initiatives, conducts
            sessions, and collaborates on innovative projects. He is passionate about scalable
            systems, cloud technologies, and modern software architecture.
          </p>
        </div>
      </div>
    </Section>
  );
}
