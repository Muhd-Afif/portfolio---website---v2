import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { ProjectDetail } from "@/components/ProjectDetail";

const ProjectItem = ({ project, onOpen, alignDown }) => {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 15 });
  const sry = useSpring(ry, { stiffness: 160, damping: 15 });

  const onMove = (e) => {
    if (!window.matchMedia("(pointer: fine)").matches || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 5);
    rx.set(-py * 5);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      data-testid={`project-item-${project.id}`}
      className={alignDown ? "md:mt-32" : ""}
    >
      <motion.button
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onClick={() => onOpen(project)}
        data-testid={`project-open-${project.id}`}
        data-cursor="view"
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
        className="group block w-full text-left transition-transform duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2563FF] group-hover:-translate-y-1"
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-[#2563FF]/60 group-hover:shadow-glow">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#2563FF]/0 transition-colors duration-500 group-hover:bg-[#2563FF]/10" />
          <div className="absolute right-5 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-[#2563FF] opacity-0 shadow-glow transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <span className="absolute left-4 top-4 rounded-sm bg-black/40 px-2 py-1 font-display text-sm font-medium text-white backdrop-blur-sm">
            {project.index}
          </span>
        </div>

        <div className="mt-6 flex items-start justify-between gap-4">
          <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-[#F5F7FA] transition-colors duration-300 group-hover:text-white md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[#2563FF]">{project.category}</p>
          </div>
          <span className="shrink-0 pt-1 text-sm text-[#94A3B8]">
            {project.year}
          </span>
        </div>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-[#94A3B8]">
          {project.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#94A3B8] transition-colors duration-300 group-hover:text-[#00A8FF]">
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </motion.button>
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
          <span className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
            <span className="inline-block h-px w-8 bg-[#2563FF]" />
            02 — Work
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#F5F7FA] md:text-6xl">
            Selected Work
          </h2>
          <p className="mt-6 text-lg text-[#94A3B8]">
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
