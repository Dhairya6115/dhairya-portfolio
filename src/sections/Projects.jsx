import { useRef } from "react";
import { ExternalLink, Sparkles, Globe, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapConfig";
import { Button } from "../components/ui/Button";
import { GithubIcon } from "../components/ui/SocialIcons";
import radhePreview from "../assets/radhe-creation-preview.webp";

export function Projects() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".project-content-left, .project-visual-right", { opacity: 1 });
        return;
      }

      gsap.fromTo(
        ".project-header",
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
        ".project-content-left",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".project-visual-right",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
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

  const projectData = {
    title: "RADHE CREATION",
    subtitle: "WordPress Handmade-Art & Décor Website",
    description:
      "A website project for showcasing handmade artwork and décor products, with organized product categories and browsable page content.",
    liveUrl: "https://dhairya6115.github.io/radhe-creation/",
    githubUrl: "https://github.com/Dhairya6115/radhe-creation",
    tags: ["WordPress", "HTML5", "CSS3", "JavaScript"],
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-28 sm:py-36 relative bg-[#050505] overflow-hidden text-neutral-100"
    >
      {/* Radiant Orange Ambient Glow Behind Project Showcase */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[450px] bg-[#ff5e00]/12 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ff7a00]/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* ================= SECTION HEADER ================= */}
        <div className="project-header max-w-3xl mb-16 sm:mb-20 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-xs font-mono text-[#ff7a00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse"></span>
            <span>// 03 — FEATURED SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            SELECTED <br />
            <span className="text-[#ff5e00] orange-text-glow">WORK</span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            A featured project showcasing practical WordPress implementation, structured product categories, and responsive presentation.
          </p>
        </div>

        {/* ================= PREMIUM TWO-COLUMN PROJECT SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">
          {/* LEFT: Project Information, Architecture & Links (5 Columns) */}
          <div className="project-content-left lg:col-span-5 space-y-6 w-full min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-xs font-mono text-[#ff7a00]">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5e00]" />
              <span>Featured Project</span>
            </div>

            <div>
              <span className="text-xs font-mono text-[#ff7a00] uppercase tracking-wider block mb-1">
                {projectData.subtitle}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {projectData.title}
              </h3>
            </div>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              {projectData.description}
            </p>

            {/* Architecture Highlights */}
            <div className="space-y-2.5 pt-2 border-t border-white/8">
              {[
                "Organized product catalog for artwork & home décor items",
                "Responsive layout adapted for smartphones, tablets, and desktops",
                "Clear visual navigation and structured category browsing",
                "Clean integration of HTML5, CSS3, and JavaScript enhancements",
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5e00] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Technology Labels */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-3">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {projectData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-[#0e0e12] border border-white/10 text-xs font-mono text-neutral-300 hover:border-[#ff5e00]/50 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={ExternalLink}
              >
                Live Website
              </Button>
              <Button
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                icon={GithubIcon}
              >
                GitHub Repository
              </Button>
            </div>
          </div>

          {/* RIGHT: Large, Clear Preview of Actual Radhe Creation Website (7 Columns) */}
          <div className="project-visual-right lg:col-span-7 w-full min-w-0">
            <div className="relative rounded-2xl bg-[#0E0E10] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden group hover:border-[#ff5e00]/50 transition-all duration-300">
              {/* Browser Window Header Chrome */}
              <div className="px-4 py-3 bg-[#131317] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#10b981]/80"></span>
                </div>

                {/* Browser Address Bar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#09090c] border border-white/5 text-[11px] font-mono text-neutral-400 max-w-xs sm:max-w-md w-full mx-auto truncate min-w-0">
                  <Globe className="w-3 h-3 text-[#ff5e00] shrink-0" />
                  <span className="truncate">https://dhairya6115.github.io/radhe-creation/</span>
                </div>

                {/* Small Label: LIVE PROJECT PREVIEW */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="hidden sm:inline">LIVE PROJECT PREVIEW</span>
                  <span className="sm:hidden">LIVE</span>
                </div>
              </div>

              {/* Clickable Actual Website Screenshot Preview Container */}
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group/preview bg-[#070709] overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
                aria-label="Open Radhe Creation Live Website in new tab"
              >
                {/* Real Radhe Creation Website Screenshot */}
                <img
                  src={radhePreview}
                  alt="Radhe Creation - WordPress Handmade-Art & Décor Website Preview"
                  className="w-full h-auto object-contain block group-hover/preview:scale-[1.015] transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle Hover Action Overlay Pill */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0e0e12]/95 border border-[#ff5e00]/50 text-white font-semibold text-xs sm:text-sm shadow-xl orange-glow-sm">
                    <span>Open Live Website</span>
                    <ArrowUpRight className="w-4 h-4 text-[#ff5e00]" />
                  </span>
                </div>
              </a>

              {/* Bottom Metadata Bar */}
              <div className="px-4 py-2.5 bg-[#0a0a0d] border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-400 gap-2">
                <span>WORDPRESS • HANDMADE ART &amp; DÉCOR</span>
                <span className="text-[#ff7a00]">dhairya6115.github.io/radhe-creation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
