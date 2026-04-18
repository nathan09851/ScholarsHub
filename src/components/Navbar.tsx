import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import BrandMark from "@/components/BrandMark";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Subjects", path: "/subjects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Payments", path: "/payments" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Shrink/glass intensify on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <div
          className={`mesh-border flex items-center justify-between rounded-[24px] border border-white/60 bg-white/75 px-4 py-3 shadow-lg backdrop-blur-xl md:px-5 transition-all duration-300 ${
            scrolled ? "shadow-xl bg-white/88 py-2" : ""
          }`}
        >
          <Link
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
            to="/"
          >
            <BrandMark compact />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-underline rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-slate-950 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-950/6 hover:text-slate-950"
                  }`}
                  key={link.path}
                  to={link.path}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              className="btn-shine rounded-full px-6 transition-transform duration-200 hover:scale-[1.03]"
              size="sm"
              variant="hero"
              asChild
            >
              <Link to="/payments">Enroll now</Link>
            </Button>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex rounded-full border border-slate-900/10 bg-white/70 p-2 text-slate-900 shadow-sm transition-all hover:bg-white hover:scale-105 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            <span
              className={`transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>

        {/* Mobile menu — slide down */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 rounded-[24px] border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "text-slate-700 hover:bg-slate-950/6 hover:translate-x-1"
                    }`}
                    key={link.path}
                    style={{ transitionDelay: isOpen ? `${index * 40}ms` : "0ms" }}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button className="btn-shine mt-2 rounded-2xl" size="lg" variant="hero" asChild>
                <Link to="/payments">Start enrollment</Link>
              </Button>
              <p className="px-2 pt-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                {siteConfig.brandSubtitle}
              </p>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
