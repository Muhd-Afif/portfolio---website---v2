import Marquee from "react-fast-marquee";
import { marqueeWords } from "@/data/portfolio";

export const Ribbon = () => {
  return (
    <div
      data-testid="marquee"
      className="border-y border-white/10 py-8 md:py-12"
      aria-hidden="true"
    >
      <Marquee speed={38} gradient={false} autoFill>
        {marqueeWords.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="text-stroke px-8 font-display text-5xl font-bold uppercase tracking-tight md:text-7xl lg:text-8xl">
              {w}
            </span>
            <span className="text-2xl text-[var(--accent)] md:text-4xl">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};
