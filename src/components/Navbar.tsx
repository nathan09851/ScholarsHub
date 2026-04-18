import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Subjects", path: "/subjects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Payments", path: "/payments" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <div className="mesh-border flex items-center justify-between rounded-[24px] border border-white/60 bg-white/75 px-4 py-3 shadow-lg backdrop-blur-xl md:px-5">
          <Link className="flex items-center gap-3" to="/">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950 shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-foreground">
                {siteConfig.brandName}
              </p>
              <p className="hidden text-xs uppercase tracking-[0.22em] text-slate-500 sm:block">
                Goa tuition support
              </p>
            </div>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-2 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
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
            <Button className="rounded-full px-6" size="sm" variant="hero" asChild>
              <Link to="/payments">Enroll now</Link>
            </Button>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex rounded-full border border-slate-900/10 bg-white/70 p-2 text-slate-900 shadow-sm transition hover:bg-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 rounded-[24px] border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl md:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "text-slate-700 hover:bg-slate-950/6"
                    }`}
                    key={link.path}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button className="mt-2 rounded-2xl" size="lg" variant="hero" asChild>
                <Link to="/payments">Start enrollment</Link>
              </Button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
