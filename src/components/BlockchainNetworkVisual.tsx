import { motion } from 'framer-motion';

/**
 * Upgraded Blockchain Visualization
 * - 3D cube illusion (SVG)
 * - Animated data flow
 * - Glow + particles
 */

const NODES = [
  { cx: 60, cy: 200, size: 16, delay: 0 },
  { cx: 140, cy: 180, size: 16, delay: 0.2 },
  { cx: 220, cy: 220, size: 16, delay: 0.4 },
  { cx: 300, cy: 180, size: 16, delay: 0.6 },
  { cx: 380, cy: 200, size: 16, delay: 0.8 },
];

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
];

export function BlockchainNetworkVisual() {
  return (
    <motion.div
      className="blockchain-viz"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="blockchain-viz__glow" />

      <svg viewBox="0 0 440 400" className="blockchain-viz__svg">
        <defs>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for links */}
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* LINKS */}
        {LINKS.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];

          return (
            <motion.line
              key={i}
              x1={A.cx}
              y1={A.cy}
              x2={B.cx}
              y2={B.cy}
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.2,
              }}
            />
          );
        })}

        {/* 3D BLOCKS */}
        {NODES.map((n, i) => {
          const s = n.size;
          const x = n.cx;
          const y = n.cy;

          return (
            <motion.g key={i} filter="url(#glow)">
              {/* TOP FACE */}
              <polygon
                points={`
                  ${x},${y - s}
                  ${x + s},${y - s / 2}
                  ${x},${y}
                  ${x - s},${y - s / 2}
                `}
                fill="#60a5fa"
                opacity="0.95"
              />

              {/* LEFT FACE */}
              <polygon
                points={`
                  ${x - s},${y - s / 2}
                  ${x},${y}
                  ${x},${y + s}
                  ${x - s},${y + s / 2}
                `}
                fill="#2563eb"
                opacity="0.9"
              />

              {/* RIGHT FACE */}
              <polygon
                points={`
                  ${x + s},${y - s / 2}
                  ${x},${y}
                  ${x},${y + s}
                  ${x + s},${y + s / 2}
                `}
                fill="#1d4ed8"
                opacity="0.9"
              />

              {/* EDGE GLOW */}
              <motion.rect
                x={x - s}
                y={y - s}
                width={s * 2}
                height={s * 2}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1.5"
                opacity="0.6"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: n.delay,
                }}
              />

              {/* PULSE EFFECT */}
              <motion.circle
                cx={x}
                cy={y}
                r={s * 0.6}
                fill="#3b82f6"
                opacity="0.15"
                animate={{
                  r: [s * 0.6, s * 1.5, s * 0.6],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: n.delay,
                }}
              />
            </motion.g>
          );
        })}
      </svg>

      {/* PARTICLES */}
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="blockchain-viz__particle"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${10 + (i * 11) % 80}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </motion.div>
  );
}