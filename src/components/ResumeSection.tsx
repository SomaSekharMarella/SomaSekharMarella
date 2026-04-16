import { FaDownload } from 'react-icons/fa';
import { Section } from './Section';

const RESUME_PATH = '/SomaSekharResume.pdf';

export function ResumeSection() {
  return (
    <Section id="resume" className="resume-block">
      <div className="container">
        <h2 className="section-heading">Resume</h2>
        <p className="section-sub">One-click PDF — experience, projects, and education in one place.</p>
        <div className="card glass-card resume-block__card">
          <p className="resume-block__text">
            Prefer a printable overview? Grab the latest PDF below :)
          </p>
          <a href={RESUME_PATH} download className="btn btn--primary resume-block__btn">
            <FaDownload aria-hidden />
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
