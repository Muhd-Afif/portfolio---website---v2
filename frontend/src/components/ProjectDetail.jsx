import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { EASE } from "@/lib/motion";

const DetailBlock = ({ label, children }) => (
  <div className="border-t border-white/10 py-8">
    <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
      {label}
    </h4>
    <div className="text-lg leading-relaxed text-zinc-300">{children}</div>
  </div>
);

export const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          data-testid="project-detail"
          className="fixed inset-0 z-[110] overflow-y-auto bg-[#050505]"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2563FF]/15 bg-[#050505]/70 px-6 py-5 backdrop-blur-xl md:px-12 lg:px-20">
            <span className="font-display text-sm text-[#94A3B8]">
              {project.index} — {project.title}
            </span>
            <button
              onClick={onClose}
              data-testid="project-detail-close"
              data-cursor="hover"
              className="group flex items-center gap-2 text-sm text-[#94A3B8] transition-colors hover:text-[#00A8FF]"
            >
              Close
              <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mx-auto max-w-[1400px] px-6 pb-32 md:px-12 lg:px-20"
          >
            {/* Hero */}
            <div className="pt-12 md:pt-20">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                {project.category}
              </p>
              <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-8xl">
                {project.title}
              </h2>
              <div className="mt-8 flex items-center gap-6 text-sm text-zinc-500">
                <span>{project.year}</span>
                <span className="h-px w-10 bg-zinc-700" />
                <span>Interactive Multimedia</span>
              </div>
            </div>

            <div
              className={`mt-14 overflow-hidden border border-white/10 ${
                project.galleryLayout === "poster"
                  ? "flex justify-center bg-[#0a0a0a] py-4"
                  : "aspect-[16/9]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={
                  project.galleryLayout === "poster"
                    ? "max-h-[80vh] w-auto object-contain"
                    : "h-full w-full object-cover"
                }
              />
            </div>

            {/* Editorial layout */}
            <div className="mt-16 grid grid-cols-1 gap-x-16 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h3 className="mb-5 font-display text-2xl font-semibold text-white">
                  Overview
                </h3>
                <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">
                  {project.overview}
                </p>

                <DetailBlock label="Objective">{project.objective}</DetailBlock>
                <DetailBlock label="Process">{project.process}</DetailBlock>
                <DetailBlock label="Final Outcome">
                  {project.outcome}
                </DetailBlock>
              </div>

              <aside className="mt-12 lg:col-span-4 lg:col-start-9 lg:mt-2">
                <div className="lg:sticky lg:top-28">
                  <div className="border-t border-white/10 py-6">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                      My Role
                    </h4>
                    <p className="text-base leading-relaxed text-zinc-300">
                      {project.role}
                    </p>
                  </div>
                  <div className="border-t border-white/10 py-6">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                      Tools Used
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.tools.map((t) => (
                        <li
                          key={t}
                          className="border border-white/15 px-3 py-1.5 text-sm text-zinc-300"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>

            {/* Video */}
            {project.video && (
              <div className="mt-20">
                <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Project Video
                </h4>
                <div className="aspect-video w-full overflow-hidden border border-white/10 bg-black">
                  <iframe
                    src={project.video}
                    title={`${project.title} video`}
                    className="h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    data-testid="project-video"
                  />
                </div>
              </div>
            )}

            {/* Gallery */}
            <div className="mt-20">
              <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                Project Gallery
              </h4>
              {project.galleryLayout === "poster" ? (
                <div className="gap-4 [column-fill:_balance] sm:columns-2 [&>*]:mb-4">
                  {project.gallery
                    .filter((src) => src !== project.image)
                    .map((src, i) => (
                      <div
                        key={i}
                        className="break-inside-avoid overflow-hidden border border-white/10 bg-[#0a0a0a]"
                      >
                        <img
                          src={src}
                          alt={`${project.title} poster ${i + 1}`}
                          loading="lazy"
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {project.gallery.map((src, i) => (
                    <div
                      key={i}
                      className={`overflow-hidden border border-white/10 ${
                        i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${project.title} gallery ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
