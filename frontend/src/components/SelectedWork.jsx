import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { ProjectDetail } from "@/components/ProjectDetail";

const ProjectItem = ({ project, onOpen, alignDown }) => {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      data-testid={`project-item-${project.id}`}
      className={alignDown ? "md:mt-32" : ""}
    >
      <button
        onClick={() => onOpen(project)}
        data-testid={`project-open-${project.id}`}
        className="group block w-full text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
          <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-500 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5 text-black transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <span className="absolute left-4 top-4 rounded-sm bg-black/40 px-2 py-1 font-display text-sm font-medium text-white backdrop-blur-sm">
            {project.index}
          </span>
        </div>

        <div className="mt-6 flex items-start justify-between gap-4">
          <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-500">{project.category}</p>
          </div>
          <span className="shrink-0 pt-1 text-sm text-zinc-600">
            {project.year}
          </span>
        </div>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </button>
    </motion.article>
  );
};

export const SelectedWork = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="work"
      data-testid="work-section"
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
            02 — Work
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            Selected Work
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            A selection of academic and personal multimedia projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 md:gap-y-4">
          {projects.map((p, i) => (
            <ProjectItem
              key={p.id}
              project={p}
              onOpen={setActive}
              alignDown={i % 2 === 1}
            />
          ))}
        </div>
      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
};
