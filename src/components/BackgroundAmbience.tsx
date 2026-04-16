import { motion } from 'framer-motion';

/**
 * Fixed blur orbs + subtle grid for a layered Web3-style atmosphere (non-interactive).
 */
export function BackgroundAmbience() {
  return (
    <div className="ambience" aria-hidden>
      <div className="ambience__grid" />
      <motion.div
        className="ambience__blob ambience__blob--1"
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambience__blob ambience__blob--2"
        animate={{ x: [0, -20, 0], y: [0, 22, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambience__blob ambience__blob--3"
        animate={{ x: [0, 16, 0], y: [0, 14, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
