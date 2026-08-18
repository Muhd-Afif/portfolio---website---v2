import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useScrollTo } from "@/lib/useScrollTo";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      data-testid="navbar"
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-500 ${
        scrolled
          ? "border-white/10 bg-black/60 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20">
        <button
          data-testid="nav-logo"
          onClick={() => go("#home")}
          className="font-display text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-70"
        >
          {profile.initials}
        </button>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => go(link.href)}
                  className="group relative text-sm tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>
          <button
            data-testid="nav-lets-talk"
            onClick={() => go("#contact")}
            className="group flex items-center gap-1.5 border border-white/25 px-5 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Let's Talk
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            data-testid="nav-mobile-menu"
            className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
                    onClick={() => go(link.href)}
                    className="w-full border-b border-white/5 py-4 text-left font-display text-2xl text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <button
                data-testid="nav-mobile-lets-talk"
                onClick={() => go("#contact")}
                className="mt-6 flex items-center justify-center gap-1.5 border border-white/25 py-3 text-sm text-white"
              >
                Let's Talk <ArrowUpRight className="h-4 w-4" />
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
