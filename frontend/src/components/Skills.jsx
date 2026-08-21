import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { skills, software } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export const Skills = () => {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative px-6 py-28 md:px-12 md:py-36 lg:px-20 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-20 max-w-3xl"
        >
          <span className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
            <span className="inline-block h-px w-8 bg-[#2563FF]" />
            03 — Skills
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F7FA] md:text-6xl">
            Skills &amp; Tools
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="border-t border-[#2563FF]/20 pt-8"
              data-testid={`skill-group-${group.category.toLowerCase()}`}
            >
              <h3 className="mb-6 font-display text-xl font-semibold text-[#F5F7FA]">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg text-[#94A3B8]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#2563FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 border-t border-white/10 pt-10"
        >
          <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
            Software
          </h3>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {software.map((s) => (
              <motion.div
                key={s}
                variants={fadeUp}
                data-testid={`software-${s.toLowerCase().replace(/\s+/g, "-")}`}
                data-cursor="hover"
                className="group flex items-center justify-between border border-white/10 bg-[#0a1120]/40 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/60 hover:bg-[#0a1120] hover:shadow-glow"
              >
                <span className="font-display text-base text-[#94A3B8] transition-colors duration-300 group-hover:text-[#F5F7FA] md:text-lg">
                  {s}
                </span>
                <ArrowUpRight className="h-4 w-4 -translate-x-1 text-[#00A8FF] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
