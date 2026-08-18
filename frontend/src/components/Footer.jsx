import { profile } from "@/data/portfolio";
import { useScrollTo } from "@/lib/useScrollTo";

export const Footer = () => {
  const scrollTo = useScrollTo();
  return (
    <footer
      data-testid="footer"
      className="border-t border-white/10 px-6 py-12 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <button
          onClick={() => scrollTo("#home")}
          data-testid="footer-logo"
          className="font-display text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-70"
        >
          {profile.initials}
        </button>
        <p className="text-sm text-zinc-500">Interactive Multimedia Student</p>
        <p className="text-sm text-zinc-600">© 2026 Muhammad Afif</p>
      </div>
    </footer>
  );
};
