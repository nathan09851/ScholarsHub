import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-shell min-h-screen">
      <a
        className="sr-only fixed left-4 top-4 z-[70] rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-28">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
