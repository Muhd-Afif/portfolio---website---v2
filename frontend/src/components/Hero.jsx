import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { maskLine, EASE } from "@/lib/motion";
import { useScrollTo } from "@/lib/useScrollTo";

const MaskLine = ({ children, i }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      variants={maskLine}
      custom={i}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:px-20">
        {/* Left: kinetic typography */}
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            data-testid="hero-label"
            className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Interactive Multimedia Student
          </motion.p>

          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-[7.5rem]">
            <MaskLine i={0}>Muhammad</MaskLine>
            <MaskLine i={1}>Afif</MaskLine>
          </h1>

          <div className="mt-8 max-w-2xl">
            <MaskLine i={2}>
              <p className="font-display text-xl leading-snug tracking-tight text-zinc-300 md:text-2xl lg:text-3xl">
                Creating visual experiences through design, motion and
                interactive media.
              </p>
            </MaskLine>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            className="mt-8 max-w-xl text-base leading-relaxed text-zinc-500"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: EASE }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-view-work"
              onClick={() => scrollTo("#work")}
              className="group flex items-center gap-2 bg-white px-8 py-4 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              data-testid="hero-download-resume"
              href={profile.resumeUrl}
              download
              className="group flex items-center gap-2 border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:border-white/60"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: abstract animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: EASE }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <motion.div
            style={{ y: visualY }}
            className="relative aspect-[3/4] w-full overflow-hidden border border-white/10"
          >
            <motion.img
              src={profile.heroVisual}
              alt="Abstract multimedia composition"
              style={{ scale: visualScale }}
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            {/* Centered brand mark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={profile.logo}
                alt="AFIF logo"
                className="h-28 w-auto object-contain opacity-90 md:h-40"
              />
            </div>
            {/* Rotating wireframe accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full border border-[var(--accent)]/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 h-40 w-40 rounded-full border border-white/10"
            />
          </motion.div>
          <div className="absolute -bottom-4 left-4 font-display text-xs uppercase tracking-[0.3em] text-zinc-600">
            Design · Motion · Interactive
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        data-testid="hero-scroll-cue"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 md:flex"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
};
