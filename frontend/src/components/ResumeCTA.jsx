import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export const ResumeCTA = () => {
  return (
    <section
      id="resume"
      data-testid="resume-cta-section"
      className="relative px-6 py-28 md:px-12 md:py-36 lg:px-20 lg:py-44"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-[1600px] border-y border-white/10 py-20 md:py-28"
      >
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
          Open to Opportunities
        </p>
        <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tighter text-white md:text-6xl lg:text-7xl">
          Looking for a creative internship opportunity.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          I'm open to opportunities where I can learn, contribute and develop my
          skills in multimedia, design and digital content.
        </p>
        <a
          data-testid="resume-cta-download"
          href={profile.resumeUrl}
          download
          className="group mt-12 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};
