import { useEffect, useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certs' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          onClick={(e) => handleClick(e, '#home')}
        >
          Soma Sekhar Marella
        </a>
        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="navbar__link"
              onClick={(e) => handleClick(e, href)}
            >
              {label}
            </a>
          ))}
          <button 
            type="button" 
            className="navbar__theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
