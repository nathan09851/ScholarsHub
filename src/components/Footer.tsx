import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { campusLocations, siteConfig, subjects } from "@/content/site";

const Footer = () => {
  return (
    <footer className="section-shell pb-10 pt-14">
      <div className="container px-4">
        <div className="ink-panel mesh-border overflow-hidden">
          <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] md:p-10">
            <div className="space-y-5">
              <Link className="inline-flex items-center gap-3" to="/">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold">
                    {siteConfig.brandName}
                  </p>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/55">
                    Learn. Grow. Stay ahead.
                  </p>
                </div>
              </Link>
              <p className="max-w-sm text-sm leading-7 text-white/72">
                Structured tuition support for students across Goa with clear
                communication, transparent fees, and a smoother parent journey.
              </p>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/78 transition hover:bg-white/12"
                href={siteConfig.instagram}
                rel="noreferrer"
                target="_blank"
              >
                <Instagram className="h-4 w-4" />
                @scholarshubgoa
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Quick links
              </h2>
              <ul className="space-y-3 text-sm text-white/76">
                <li>
                  <Link className="transition hover:text-white" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" to="/subjects">
                    Subjects
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-white"
                    to="/testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" to="/payments">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Subject focus
              </h2>
              <ul className="space-y-3 text-sm text-white/76">
                {subjects.slice(0, 5).map((subject) => (
                  <li key={subject.title}>{subject.title}</li>
                ))}
                <li>Geography and History</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Contact
              </h2>
              <ul className="space-y-4 text-sm text-white/76">
                {siteConfig.phones.map((phone) => (
                  <li className="flex items-center gap-3" key={phone}>
                    <Phone className="h-4 w-4 text-amber-300" />
                    <a className="transition hover:text-white" href={`tel:${phone}`}>
                      {phone}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-amber-300" />
                  <a
                    className="transition hover:text-white"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-amber-300" />
                  <div className="space-y-1">
                    {campusLocations.map((location) => (
                      <p key={location.name}>
                        {location.name}, {location.area}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 px-8 py-5 text-sm text-white/55 md:px-10">
            <p>
              Copyright {new Date().getFullYear()} {siteConfig.brandName}. Built for
              stronger parent trust, clearer UX, and a more secure intake flow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
