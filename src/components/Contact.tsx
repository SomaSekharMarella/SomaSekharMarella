import { FormEvent, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Section } from './Section';

const email = '2300030411cseelge@gmail.com';
const linkedin = 'https://www.linkedin.com/in/soma-sekhar-marella-a16a67302/';
const github = 'https://github.com/SomaSekharMarella';
const leetcode = 'https://leetcode.com/u/klu2300030411/';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // MOCK SUBMIT - Replace with real Formspree / Web3Forms endpoint
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <Section id="contact" className="contact">
      <div className="container">
        <h2 className="section-heading">Contact</h2>
        <p className="section-sub">Let&apos;s build something great together.</p>
        
        <div className="contact__grid">
          <div className="contact__form-wrap glass-card">
            {status === 'success' ? (
              <div className="contact__success">
                <FaPaperPlane className="contact__success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn--ghost mt-4" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} required placeholder="Hello..."></textarea>
                </div>
                <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  <FaPaperPlane aria-hidden />
                </button>
              </form>
            )}
          </div>
          
          <div className="contact__info glass-card">
            <h3 className="contact__info-title">Connect with me</h3>
            <p className="contact__info-desc">I'm always open to discussing web3, system architecture, or partnership opportunities.</p>
            <ul className="contact__list">
              <li>
                <a href={`mailto:${email}`} className="contact__link">
                  <FaEnvelope className="contact__icon" aria-hidden />
                  <span>{email}</span>
                </a>
              </li>
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <FaLinkedin className="contact__icon" aria-hidden />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className="contact__link">
                  <FaGithub className="contact__icon" aria-hidden />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href={leetcode} target="_blank" rel="noopener noreferrer" className="contact__link">
                  <SiLeetcode className="contact__icon" aria-hidden />
                  <span>LeetCode</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
