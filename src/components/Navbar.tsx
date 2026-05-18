import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import BrandMark from "@/components/BrandMark";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Subjects", path: "/subjects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Shrink/glass intensify on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <div
          className={`mesh-border flex items-center justify-between rounded-[24px] border border-white/60 bg-white/75 px-3 py-2 shadow-lg backdrop-blur-xl md:px-5 md:py-3 transition-all duration-300 ${
            scrolled ? "shadow-xl bg-white/88 py-1.5" : ""
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
            <ThemeToggle />
            <Button
              className="btn-shine rounded-full px-6 transition-transform duration-200 hover:scale-[1.03]"
              size="sm"
              variant="hero"
              asChild
            >
              <Link to="/about">Enroll now</Link>
            </Button>
            <a
              aria-label="Chat with Schoolars Hub on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.03] hover:bg-[#1fb95a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I would like to know more about Schoolars Hub tuition classes.")}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-5-5z"/></svg>
              <span>WhatsApp us</span>
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex rounded-full border border-slate-900/10 bg-white/70 p-2 text-slate-900 shadow-sm transition-all hover:bg-white hover:scale-105"
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
                    className={`py-3 px-2 text-base rounded-md w-full block font-semibold transition-all duration-150 ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "text-slate-700 hover:bg-slate-950/6 hover:translate-x-1"
                    }`}
                    key={link.path}
                    style={{ 
                      transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms",
                      transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                      opacity: isOpen ? 1 : 0 
                    }}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button className="btn-shine mt-2 rounded-2xl" size="lg" variant="hero" asChild>
                <Link to="/about">Start enrollment</Link>
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
