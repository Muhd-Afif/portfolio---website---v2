import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Magnetic } from "@/components/Magnetic";

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
        className="relative mx-auto max-w-[1600px] overflow-hidden border-y border-white/10 py-20 md:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#2563FF] opacity-[0.12] blur-[130px]"
        />
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[#2563FF]">
          Open to Opportunities
        </p>
        <h2 className="relative max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tighter text-[#F5F7FA] md:text-6xl lg:text-7xl">
          Let's create something{" "}
          <span className="text-[#2563FF]">exceptional.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
          I'm open to opportunities where I can learn, contribute and develop my
          skills in multimedia, design and digital content.
        </p>
        <Magnetic className="mt-12 inline-block">
          <a
            data-testid="resume-cta-download"
            data-cursor="hover"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#2563FF] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            View Resume
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Magnetic>
      </motion.div>
    </section>
  );
};
