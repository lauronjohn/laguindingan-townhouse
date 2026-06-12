import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { siteData } from "../data/siteData";
import { useUnit } from "../context/UnitContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeUnit } = useUnit();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-18">
          <Link
            to="hero"
            smooth
            duration={500}
            className={`cursor-pointer font-heading text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-cocoa" : "text-white"
          }`}
          >
            {siteData.name}
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteData.nav.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="text-clay"
                className={`cursor-pointer text-sm font-medium transition-colors hover:text-clay ${
                  scrolled ? "text-cocoa/80" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={activeUnit.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-clay-dark hover:shadow-lg"
            >
              Book {activeUnit.shortName}
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-cocoa" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-cocoa" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-cocoa/10 bg-cream px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-3">
            {siteData.nav.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer py-2 text-base font-medium text-cocoa/80 transition-colors hover:text-clay"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={activeUnit.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-amber px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-clay-dark"
            >
              Book {activeUnit.shortName}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
