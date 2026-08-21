import { motion } from "framer-motion";
import { about, stats, profile } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const SectionLabel = ({ children }) => (
  <span className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
    <span className="inline-block h-px w-8 bg-[#2563FF]" />
    {children}
  </span>
);

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative px-6 py-28 md:px-12 md:py-36 lg:px-20 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F7FA] md:text-6xl">
            About Me
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="group relative aspect-[3/4] overflow-hidden border border-white/10 transition-colors duration-500 hover:border-[#2563FF]/50">
              <img
                data-testid="about-portrait"
                src={profile.portrait}
                alt="Muhd Afif portrait"
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 to-transparent" />
            </div>
          </motion.div>

          {/* Intro + stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col justify-center md:col-span-7 lg:col-span-8"
          >
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={
                  i === 0
                    ? "mb-6 max-w-2xl font-display text-2xl leading-snug tracking-tight text-[#F5F7FA] md:text-3xl"
                    : "mb-6 max-w-2xl text-lg leading-relaxed text-[#94A3B8] md:text-xl"
                }
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
              data-testid="about-stats"
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l border-[#2563FF]/40 pl-4">
                  <div className="font-display text-4xl font-bold tracking-tight text-[#F5F7FA] md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-[#94A3B8]">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
