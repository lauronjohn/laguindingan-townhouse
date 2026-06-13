import { siteData } from "../data/siteData";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { useUnit } from "../context/UnitContext";

export default function Hero() {
  const { activeUnit } = useUnit();

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={siteData.hero.image}
          alt="Laguindingan Townhouse"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center animate-fade-in">
        <p
          className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-white"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
        >
          {siteData.hero.subheadline}
        </p>
        <h1
          className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          style={{ textShadow: "0 3px 12px rgba(0,0,0,0.8)" }}
        >
          {siteData.hero.headline}
        </h1>
        <p
          className="mx-auto mb-10 max-w-2xl text-base text-white sm:text-lg"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
        >
          {siteData.hero.description}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="unit-selector"
            smooth
            duration={700}
            offset={-80}
            className="cursor-pointer rounded-full bg-amber px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-clay-dark hover:shadow-xl hover:scale-105"
          >
            {siteData.hero.ctaPrimary}
          </Link>
          <Link
            to="about"
            smooth
            duration={700}
            offset={-80}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/80 hover:bg-white/10"
          >
            {siteData.hero.ctaSecondary}
            <ChevronDown className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
}
