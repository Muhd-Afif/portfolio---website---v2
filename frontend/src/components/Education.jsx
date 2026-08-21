import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="relative px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16"
        >
          <span className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
            <span className="inline-block h-px w-8 bg-[#2563FF]" />
            04 — Education
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F7FA] md:text-6xl">
            Experience &amp; Education
          </h2>
        </motion.div>

        <div className="border-t border-white/10">
          {education.map((item) => (
            <motion.div
              key={item.degree}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="group grid grid-cols-1 gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-[#0a1120]/40 md:grid-cols-12 md:items-baseline"
              data-testid="education-item"
            >
              <div className="flex items-center gap-3 text-sm text-[#94A3B8] md:col-span-2">
                <span className="h-2 w-2 rounded-full bg-[#2563FF] shadow-glow" />
                {item.period}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-semibold text-[#F5F7FA] md:text-3xl">
                  {item.degree}
                </h3>
                <p className="mt-1 text-base text-[#2563FF]">{item.school}</p>
              </div>
              <p className="text-base leading-relaxed text-[#94A3B8] md:col-span-6">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
