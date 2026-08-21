import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Minimal desktop-only custom cursor. Disabled on touch / small screens.
export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default"); // default | hover | view

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 550, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 550, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 1024;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("hide-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const el = e.target.closest?.("[data-cursor]");
      setVariant(el ? el.getAttribute("data-cursor") : "default");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.body.classList.remove("hide-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const isView = variant === "view";
  const isHover = variant === "hover";

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isView ? 76 : isHover ? 46 : 12,
          height: isView ? 76 : isHover ? 46 : 12,
          backgroundColor: isView || isHover ? "rgba(37,99,255,0.10)" : "#F5F7FA",
          borderWidth: isView || isHover ? 1.5 : 0,
          borderColor: "rgba(0,168,255,0.9)",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      >
        {isView && (
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            View
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
