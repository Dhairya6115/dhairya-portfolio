import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { navLinks, personalData } from "../data/portfolioData";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80"
          : "bg-[#050505]/90 backdrop-blur-md border-b border-white/8 py-4 shadow-lg shadow-black/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Title on Left */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00] rounded-xl p-1 -m-1 shrink-0"
            aria-label="Dhairya Kachhiya - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff5e00] to-[#d44900] flex items-center justify-center font-bold text-black text-lg shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
              DK
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-white text-base tracking-tight group-hover:text-[#ff7a00] transition-colors truncate">
                {personalData.name}
              </span>
              <span className="text-[11px] text-[#ff7a00] font-mono tracking-wider truncate">
                JUNIOR WEB DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121217]/90 border border-white/8 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00] ${
                    isActive
                      ? "text-[#ff7a00] bg-[#ff5e00]/15 shadow-[0_0_12px_rgba(255,94,0,0.15)] font-semibold"
                      : "text-neutral-300 hover:text-[#ff7a00] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#ff5e00]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop on Right) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Prominent Resume Download Button */}
            <a
              href={personalData.resumeUrl}
              download="Dhairya-Kachhiya-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-neutral-200 bg-[#141419] border border-white/10 hover:border-[#ff5e00]/50 hover:text-white hover:bg-white/10 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
            >
              <FileText className="w-4 h-4 text-[#ff5e00]" />
              <span>Resume</span>
            </a>

            {/* Direct Contact Button */}
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={ArrowUpRight}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile & Tablet Actions: Quick CV (Mobile only) + Hamburger Toggle (Below 1024px) */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={personalData.resumeUrl}
              download="Dhairya-Kachhiya-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-200 bg-[#141419] border border-white/10 hover:border-[#ff5e00]/40"
              aria-label="Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#ff5e00]" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#141419] border border-white/10 text-neutral-300 hover:text-white hover:border-[#ff5e00]/50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0c0c10] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-[#ff7a00] bg-[#ff5e00]/15"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#ff5e00]">→</span>
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/8 space-y-2">
              <a
                href={personalData.resumeUrl}
                download="Dhairya-Kachhiya-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#141419] border border-white/10 text-neutral-200 font-medium text-sm hover:border-[#ff5e00]/40 transition-colors"
              >
                <FileText className="w-4 h-4 text-[#ff5e00]" />
                <span>Download Resume (PDF)</span>
              </a>

              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
