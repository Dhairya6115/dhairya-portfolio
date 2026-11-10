import { ArrowUp, Mail, Phone, FileText } from "lucide-react";
import { personalData, navLinks } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./ui/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 bg-[#050505] relative overflow-hidden text-neutral-100">
      {/* Top subtle orange ambient hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff5e00]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 w-full min-w-0">
          {/* Brand & Identity */}
          <div className="md:col-span-2 space-y-3.5 w-full min-w-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff5e00] to-[#d44900] flex items-center justify-center font-bold text-black text-sm shadow-md">
                DK
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight uppercase">
                DHAIRYA KACHHIYA
              </span>
            </div>

            <p className="text-[#ff7a00] text-sm font-semibold tracking-wide">
              Junior Web Developer | WordPress Developer
            </p>

            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Based in {personalData.location}. Building responsive, functional websites with clean HTML, CSS, JavaScript, PHP, and WordPress.
            </p>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-neutral-400 hover:text-[#ff5e00] hover:border-[#ff5e00]/40 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-neutral-400 hover:text-[#ff5e00] hover:border-[#ff5e00]/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-neutral-400 hover:text-[#ff5e00] hover:border-[#ff5e00]/40 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-neutral-400 hover:text-[#ff5e00] hover:border-[#ff5e00]/40 transition-all"
                aria-label="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="w-full min-w-0">
            <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-[#ff7a00] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalData.resumeUrl}
                  download="Dhairya-Kachhiya-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-neutral-400 hover:text-[#ff7a00] transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#ff7a00] transition-colors" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Action & Back to Top */}
          <div className="flex flex-col justify-between items-start md:items-end w-full min-w-0">
            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
                Direct Contact
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-200 hover:border-[#ff5e00]/50 hover:text-[#ff7a00] transition-all"
              >
                <span>Go to Contact Section</span>
                <span className="text-[#ff5e00]">↓</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-[#ff5e00]/50 hover:bg-[#ff5e00]/10 transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} DHAIRYA KACHHIYA. All rights reserved.</p>
          <p>
            Junior Web Developer | WordPress Developer • Vadodara, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
