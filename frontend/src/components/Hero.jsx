import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { maskLine, EASE } from "@/lib/motion";
import { useScrollTo } from "@/lib/useScrollTo";
import { Magnetic } from "@/components/Magnetic";

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
            className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#94A3B8]"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2563FF]" />
            Muhd Afif — Interactive Multimedia Student
          </motion.p>

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#2563FF] opacity-20 blur-[130px]"
            />
            <h1
              data-testid="hero-title"
              className="relative font-display text-[3.25rem] font-bold uppercase leading-[0.9] tracking-tighter text-[#F5F7FA] sm:text-7xl lg:text-[8rem]"
            >
              <MaskLine i={0}>Multimedia</MaskLine>
              <MaskLine i={1}>Designer</MaskLine>
            </h1>
          </div>

          <div className="mt-8 max-w-2xl">
            <MaskLine i={2}>
              <p className="font-display text-xl leading-snug tracking-tight text-[#94A3B8] md:text-2xl lg:text-3xl">
                Creating visual experiences through design, motion and
                interactive media.
              </p>
            </MaskLine>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            className="mt-8 max-w-xl text-base leading-relaxed text-[#94A3B8]/80"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: EASE }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <button
                data-testid="hero-view-work"
                data-cursor="hover"
                onClick={() => scrollTo("#work")}
                className="group flex items-center gap-2 bg-[#2563FF] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Magnetic>
            <Magnetic>
              <a
                data-testid="hero-download-resume"
                data-cursor="hover"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-white/20 px-8 py-4 text-sm font-medium text-[#F5F7FA] transition-colors duration-300 hover:border-[#2563FF]"
              >
                View Resume
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
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
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#94A3B8]">Scroll to Explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-[#2563FF]" />
        </motion.span>
      </motion.button>
    </section>
  );
};
