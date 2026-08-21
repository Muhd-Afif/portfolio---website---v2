import { profile } from "@/data/portfolio";
import { useScrollTo } from "@/lib/useScrollTo";

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    data-cursor="hover"
    className="group relative text-sm text-[#94A3B8] transition-colors duration-300 hover:text-[#F5F7FA]"
  >
    {children}
    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#2563FF] transition-all duration-300 group-hover:w-full" />
  </a>
);

export const Footer = () => {
  const scrollTo = useScrollTo();
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/10 px-6 py-14 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <button
            onClick={() => scrollTo("#home")}
            data-testid="footer-logo"
            data-cursor="hover"
            className="flex items-center transition-opacity hover:opacity-70"
            aria-label="Back to top"
          >
            <img src={profile.logo} alt="AFIF logo" className="h-9 w-auto object-contain" />
          </button>
          <p className="text-sm text-[#94A3B8]">Multimedia Designer</p>
        </div>

        <div className="flex items-center gap-8">
          <FooterLink href={`mailto:${profile.email}`}>Email</FooterLink>
          <FooterLink href={profile.linkedin}>LinkedIn</FooterLink>
          <FooterLink href={profile.resumeUrl}>Resume</FooterLink>
        </div>

        <p className="text-sm text-[#64748b]">© 2026 Muhd Afif</p>
      </div>
    </footer>
  );
};
