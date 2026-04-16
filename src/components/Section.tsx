import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

/** Wrapper for scroll-triggered fade-in sections */
export function Section({ id, className = '', children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`.trim()}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
