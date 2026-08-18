import { motion } from "framer-motion";
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
          <span className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
            <span className="inline-block h-px w-8 bg-zinc-600" />
            03 — Skills
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
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
              className="border-t border-white/10 pt-8"
              data-testid={`skill-group-${group.category.toLowerCase()}`}
            >
              <h3 className="mb-6 font-display text-xl font-semibold text-white">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg text-zinc-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
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
          <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
            Software
          </h3>
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {software.map((s) => (
              <span
                key={s}
                data-testid={`software-${s.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-display text-2xl text-zinc-500 transition-colors duration-300 hover:text-white md:text-3xl"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
