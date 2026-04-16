import type { IconType } from 'react-icons';
import { FaAws, FaCertificate, FaExternalLinkAlt, FaJava } from 'react-icons/fa';
import { SiGithub, SiMongodb } from 'react-icons/si';
import { Section } from './Section';

type Cert = {
  name: string;
  issuer: string;
  verifyUrl: string;
  Icon: IconType;
};

const certs: Cert[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    verifyUrl:
      'https://www.credly.com/earner/earned/badge/096691cb-c512-49bf-aa21-cac018190b88',
    Icon: FaAws,
  },
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    verifyUrl:
      'https://www.credly.com/earner/earned/badge/1221e1d4-feae-4c84-87cf-a1eb03c71f6c',
    Icon: FaAws,
  },
  {
    name: 'Oracle Java SE 11 Developer',
    issuer: 'Oracle',
    verifyUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=071541B6BFA31F44EB12D457D4D7C53816A41C253EE90D23E3DB835D46259246',
    Icon: FaJava,
  },
  {
    name: 'GitHub Foundations Certified',
    issuer: 'GitHub',
    verifyUrl: 'https://www.credly.com/badges/602cd2a0-ca0c-493c-b50c-af249e46556c/print',
    Icon: SiGithub,
  },
  {
    name: 'MongoDB Associate Developer',
    issuer: 'MongoDB',
    verifyUrl: 'https://www.credly.com/badges/ecaff1e9-3a3e-4e3d-b54d-b5e9b4e501f7/public_url',
    Icon: SiMongodb,
  },

];

/** Badge-style credential cards with issuer + external verify links. */
export function Certifications() {
  return (
    <Section id="certifications" className="certs">
      <div className="container">
        <h2 className="section-heading">Certifications</h2>
        <p className="section-sub">Verified credentials — click through to issuers and Credly.</p>
        <ul className="certs__grid certs__grid--badges">
          {certs.map((c) => {
            const IssuerIcon = c.Icon;
            return (
              <li key={c.name} className="cert-badge glass-card">
                <div className="cert-badge__header">
                  <span className="cert-badge__icon-wrap">
                    <IssuerIcon className="cert-badge__issuer-icon" aria-hidden />
                  </span>
                  <FaCertificate className="cert-badge__seal" aria-hidden />
                </div>
                <h3 className="cert-badge__name">{c.name}</h3>
                <p className="cert-badge__issuer">{c.issuer}</p>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost btn--sm cert-badge__verify"
                >
                  Verify credential
                  <FaExternalLinkAlt aria-hidden className="cert-badge__verify-icon" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
