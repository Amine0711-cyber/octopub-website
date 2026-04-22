"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      /* threshold:0 fires the moment any pixel enters the viewport.
         No negative rootMargin so elements aren't pushed further away. */
      { threshold: 0, rootMargin: "0px" }
    );

    function observeAll() {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (!el.classList.contains("visible")) io.observe(el);
      });
    }

    /* Observe immediately, then re-scan for elements added later */
    observeAll();
    const t1 = setTimeout(observeAll, 200);
    const t2 = setTimeout(observeAll, 600);

    /* Hard fallback: if IntersectionObserver hasn't marked something
       visible after 1.5 s, force-show everything. This covers JS
       errors, off-screen elements, and slow hydration. */
    const fallback = setTimeout(() => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        el.classList.add("visible");
      });
    }, 1500);

    return () => {
      io.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
