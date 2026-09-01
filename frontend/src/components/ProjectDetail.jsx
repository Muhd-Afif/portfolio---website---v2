import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowUpRight } from "lucide-react";
import { EASE } from "@/lib/motion";

const ytId = (url = "") => {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return m ? m[1] : "";
};
const ytThumb = (url) => {
  const id = ytId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
};

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

            {/* Video collection */}
            {project.videoProjects && project.videoProjects.length > 0 && (
              <div className="mt-20">
                <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
                  Video Projects
                </h4>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {project.videoProjects.map((v, i) => (
                    <div
                      key={i}
                      data-testid={`video-project-${i + 1}`}
                      className="group flex flex-col border border-white/10 bg-[#0a1120]/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/50 hover:shadow-glow"
                    >
                      <a
                        href={v.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="relative block aspect-video overflow-hidden"
                        aria-label={`Watch ${v.title}`}
                      >
                        <img
                          src={ytThumb(v.videoUrl)}
                          alt={v.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/15">
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2563FF] shadow-glow transition-transform duration-300 group-hover:scale-110">
                            <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
                          </span>
                        </div>
                        <span className="absolute left-4 top-4 rounded-sm bg-black/50 px-2 py-1 font-display text-xs font-medium text-white backdrop-blur-sm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </a>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                          <span className="text-[#2563FF]">{v.education}</span>
                          {v.year && (
                            <>
                              <span className="text-[#64748b]">·</span>
                              <span className="text-[#94A3B8]">{v.year}</span>
                            </>
                          )}
                        </div>
                        <h5 className="mt-3 font-display text-xl font-semibold text-[#F5F7FA]">
                          {v.title}
                        </h5>
                        <p className="mt-1 text-sm text-[#94A3B8]">
                          {v.institution || v.course}
                          {v.subject ? ` — ${v.subject}` : ""}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                          {v.description}
                        </p>
                        <a
                          href={v.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          data-testid={`watch-video-${i + 1}`}
                          className="group/btn mt-5 inline-flex items-center gap-1.5 self-start text-sm text-[#F5F7FA] transition-colors duration-300 hover:text-[#00A8FF]"
                        >
                          Watch Video
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-20">
                <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
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
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
