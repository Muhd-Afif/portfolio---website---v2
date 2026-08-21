import { useLenis } from "lenis/react";

// Reliable smooth-scroll to an in-page anchor, offset for the fixed navbar.
export const useScrollTo = () => {
  const lenis = useLenis();
  return (target) => {
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -88, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
};
