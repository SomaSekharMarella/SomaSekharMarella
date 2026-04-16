import { useEffect, useState } from 'react';

/**
 * Cycles through role strings with a typewriter-style animation.
 */
export function useTypingRoles(
  roles: readonly string[],
  typingMs = 75,
  pauseAtFullMs = 2200,
  deletingMs = 45,
) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex] ?? '';
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingMs);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), pauseAtFullMs);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText((prev) => prev.slice(0, -1)), deletingMs);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(t);
  }, [text, roleIndex, deleting, roles, typingMs, pauseAtFullMs, deletingMs]);

  return text;
}
