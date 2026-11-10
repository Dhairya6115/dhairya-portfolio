import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Copy, Check, FileText, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapConfig";
import { personalData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons";

export function Contact() {
  const sectionRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".contact-card", { opacity: 1 });
        return;
      }

      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 sm:py-36 relative bg-[#050505] overflow-hidden text-neutral-100"
    >
      {/* Radiant Orange Ambient Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#ff5e00]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* ================= SECTION HEADER ================= */}
        <div className="contact-header text-center max-w-3xl mx-auto mb-16 sm:mb-20 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-xs font-mono text-[#ff7a00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse"></span>
            <span>// 05 — GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            LET'S START A <br />
            <span className="text-[#ff5e00] orange-text-glow">CONVERSATION</span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            I am currently open to Junior Web Developer and WordPress Developer opportunities. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* ================= DIRECT CONTACT GRID ================= */}
        <div className="max-w-5xl mx-auto space-y-6 w-full min-w-0">
          {/* Top 2 Primary Direct Contact Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-w-0">
            {/* 1. Direct Email Card */}
            <div className="contact-card p-7 sm:p-8 rounded-2xl bg-[#0E0E10]/95 border border-white/8 backdrop-blur-md relative overflow-hidden group hover:border-[#ff5e00]/50 transition-all duration-300 flex flex-col justify-between w-full min-w-0">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff5e00] to-transparent"></div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#ff5e00]/10 border border-[#ff5e00]/25 flex items-center justify-center text-[#ff5e00]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-neutral-500">DIRECT EMAIL</span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Email Address
                </span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#ff7a00] transition-colors break-all"
                >
                  {personalData.email}
                </a>

                <p className="text-xs sm:text-sm text-neutral-400 mt-2 mb-6 leading-relaxed">
                  Click below to open your default email client, or copy the address directly.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ff5e00] text-black font-semibold text-xs sm:text-sm hover:bg-[#ff782d] orange-glow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff5e00]/50 text-neutral-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Direct Phone Card */}
            <div className="contact-card p-7 sm:p-8 rounded-2xl bg-[#0E0E10]/95 border border-white/8 backdrop-blur-md relative overflow-hidden group hover:border-[#ff5e00]/50 transition-all duration-300 flex flex-col justify-between w-full min-w-0">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff7a00] to-transparent"></div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#ff5e00]/10 border border-[#ff5e00]/25 flex items-center justify-center text-[#ff5e00]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-neutral-500">DIRECT PHONE</span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Phone Number
                </span>
                <a
                  href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#ff7a00] transition-colors"
                >
                  {personalData.phone}
                </a>

                <p className="text-xs sm:text-sm text-neutral-400 mt-2 mb-6 leading-relaxed">
                  Available for phone conversations regarding employment and freelance projects.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs sm:text-sm hover:border-[#ff5e00]/50 hover:bg-[#ff5e00]/10 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#ff5e00]" />
                  <span>Call Directly</span>
                </a>
                <button
                  onClick={copyPhone}
                  className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff5e00]/50 text-neutral-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Secondary 3 Channels: LinkedIn, GitHub & Resume Download */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full min-w-0">
            {/* LinkedIn Connection */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card p-5 rounded-2xl bg-[#0E0E10]/90 border border-white/8 hover:border-[#ff5e00]/40 transition-all duration-300 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#ff7a00] group-hover:border-[#ff5e00]/40 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block">Professional</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#ff7a00] transition-colors">
                    LinkedIn
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#ff5e00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* GitHub Profile */}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card p-5 rounded-2xl bg-[#0E0E10]/90 border border-white/8 hover:border-[#ff5e00]/40 transition-all duration-300 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#ff7a00] group-hover:border-[#ff5e00]/40 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block">Code &amp; Projects</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#ff7a00] transition-colors">
                    GitHub
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#ff5e00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Direct Resume PDF Download */}
            <a
              href={personalData.resumeUrl}
              download="Dhairya-Kachhiya-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card p-5 rounded-2xl bg-[#0E0E10]/90 border border-white/8 hover:border-[#ff5e00]/40 transition-all duration-300 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/10 border border-[#ff5e00]/25 flex items-center justify-center text-[#ff5e00]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block">Download CV</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#ff7a00] transition-colors">
                    Resume (PDF)
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#ff5e00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Location & Status Banner */}
          <div className="contact-card p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full min-w-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#ff5e00]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 block uppercase">Based in</span>
                <span className="text-sm font-medium text-white">{personalData.location}</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-xs text-[#ff7a00]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5e00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5e00]"></span>
              </span>
              <span>Available for Junior Web &amp; WordPress Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
