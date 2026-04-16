import { FaUserAstronaut } from 'react-icons/fa';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" className="about">
      <div className="container">
        <h2 className="section-heading">About</h2>
        <p className="section-sub">Who I am and what drives my work</p>
        <div className="about__grid">
          <div className="about__image-wrapper">
             <div className="about__avatar">
                <FaUserAstronaut className="about__avatar-icon" />
             </div>
          </div>
          <div className="about__card glass-card about__card--accent">
            <p>
              I am a B.Tech student specializing in Blockchain Engineering with
              strong experience in Web3 and full-stack development. I have been actively building
              decentralized applications and exploring real-world blockchain use cases for over two
              years.
            </p>
            <p>
              As the President of The Blockchain Hub, I lead technical initiatives, conduct
              sessions, and collaborate with peers on innovative projects. I'm deeply passionate about scalable
              systems, cloud technologies, and modern software architecture. My goal is to build secure, 
              transparent, and high-performance applications that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
