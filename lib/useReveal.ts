import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to the section element and a boolean that
 * flips to true once the section enters the viewport.
 *
 * Because isVisible starts as false on both server and client,
 * the initial className ("reveal", not "reveal visible") matches
 * the server-rendered HTML — eliminating the hydration mismatch.
 * React's reconciler then updates the class after mount via setState.
 */
export function useReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0 }
    );

    io.observe(el);

    /* Hard fallback: show everything in this section after 1.5 s
       even if the observer never fires (e.g. element already in viewport
       on page load and threshold = 0 misses it in some browsers). */
    const fallback = setTimeout(() => setVisible(true), 1500);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  /* Helper: build the className string for a reveal element */
  function rv(base: string) {
    return visible ? `${base} visible` : base;
  }

  return { ref, visible, rv };
}
