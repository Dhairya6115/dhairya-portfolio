import { useRef } from "react";
import { Code2, Database, Globe, Wrench, CheckCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapConfig";

export function Skills() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".skill-bento-card", { opacity: 1 });
        return;
      }

      gsap.fromTo(
        ".skills-header",
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
        ".skill-bento-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.14,
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
      id="skills"
      ref={sectionRef}
      className="py-28 sm:py-36 relative bg-[#070709] overflow-hidden text-neutral-100"
    >
      {/* Radiant Orange Ambient Lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#ff5e00]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#ff7a00]/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* ================= SECTION HEADER ================= */}
        <div className="skills-header max-w-3xl mb-16 sm:mb-20 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-xs font-mono text-[#ff7a00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse"></span>
            <span>// 02 — TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            MY TECHNICAL <br />
            <span className="text-[#ff5e00] orange-text-glow">ARSENAL</span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            A focused toolkit centered on clean web standards, responsive design, practical server-side logic, and reliable WordPress execution.
          </p>
        </div>

        {/* ================= ASYMMETRIC BENTO SKILLS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full min-w-0">
          {/* 1. FRONTEND DEVELOPMENT (7 Columns) */}
          <div className="skill-bento-card lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#0E0E10]/95 border border-white/8 backdrop-blur-md relative overflow-hidden group hover:border-[#ff5e00]/40 transition-all duration-300 w-full min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#ff5e00]/10 border border-[#ff5e00]/25 flex items-center justify-center text-[#ff5e00]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff7a00] block">
                    Core Web Layer
                  </span>
                  <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500 hidden sm:inline">01_FRONTEND</span>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Building semantic, accessible markup and responsive layouts with fluid styling and dynamic DOM interactions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5e00]/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-base font-bold text-white">HTML5</span>
                  <span className="text-[11px] font-mono text-[#ff7a00]">Markup</span>
                </div>
                <p className="text-xs text-neutral-400">Semantic page architecture, forms, and accessibility.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5e00]/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-base font-bold text-white">CSS3</span>
                  <span className="text-[11px] font-mono text-[#ff7a00]">Styling</span>
                </div>
                <p className="text-xs text-neutral-400">Flexbox, CSS Grid, media queries, and responsive UX.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5e00]/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-base font-bold text-white">JavaScript</span>
                  <span className="text-[11px] font-mono text-[#ff7a00]">Logic</span>
                </div>
                <p className="text-xs text-neutral-400">ES6+ syntax, DOM manipulation, and event handling.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5e00]/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-base font-bold text-white">jQuery</span>
                  <span className="text-[11px] font-mono text-[#ff7a00]">Library</span>
                </div>
                <p className="text-xs text-neutral-400">Rapid DOM traversal, animations, and AJAX scripting.</p>
              </div>
            </div>
          </div>

          {/* 2. CMS — WORDPRESS (5 Columns) */}
          <div className="skill-bento-card lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-[#0E0E10]/95 border border-white/8 backdrop-blur-md relative overflow-hidden group hover:border-[#ff5e00]/40 transition-all duration-300 flex flex-col justify-between w-full min-w-0">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#ff5e00]/10 rounded-full blur-[70px] pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#ff5e00]/10 border border-[#ff5e00]/25 flex items-center justify-center text-[#ff5e00]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff7a00] block">
                      CMS Platform
                    </span>
                    <h3 className="text-xl font-bold text-white">WordPress</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-neutral-500 hidden sm:inline">02_CMS</span>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                Developing, configuring, and maintaining dynamic content websites with clean navigation and responsive design.
              </p>

              <div className="space-y-2.5">
                {[
                  "Theme configuration & layout customization",
                  "Responsive mobile-first page assembly",
                  "Plugin integration & content structuring",
                  "Client-friendly website administration",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-neutral-300"
                  >
                    <CheckCircle className="w-4 h-4 text-[#ff5e00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>PLATFORM</span>
              <span className="text-[#ff7a00] font-semibold">WordPress CMS</span>
            </div>
          </div>

          {/* 3. BACKEND & DATABASE (5 Columns) */}
          <div className="skill-bento-card lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-[#0E0E10]/95 border border-white/8 backdrop-blur-md relative overflow-hidden group hover:border-[#ff5e00]/40 transition-all duration-300 w-full min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff5e00]">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff7a00] block">
                    Data &amp; Server
                  </span>
                  <h3 className="text-xl font-bold text-white">Backend &amp; Database</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500 hidden sm:inline">03_BACKEND</span>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Server-side scripting and relational database querying for interactive web applications.
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between hover:border-[#ff5e00]/30 transition-colors">
                <div>
                  <span className="text-sm font-bold text-white block">PHP</span>
                  <span className="text-xs text-neutral-400">Server-side scripting, form handling &amp; logic</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-[#ff7a00] border border-white/5">
                  Server
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between hover:border-[#ff5e00]/30 transition-colors">
                <div>
                  <span className="text-sm font-bold text-white block">SQL</span>
                  <span className="text-xs text-neutral-400">Structured data queries, filtering &amp; CRUD</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-[#ff7a00] border border-white/5">
                  Query
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between hover:border-[#ff5e00]/30 transition-colors">
                <div>
                  <span className="text-sm font-bold text-white block">MySQL</span>
                  <span className="text-xs text-neutral-400">Relational database storage &amp; management</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-[#ff7a00] border border-white/5">
                  Database
                </span>
              </div>
            </div>
          </div>

          {/* 4. DEVELOPER TOOLS & WORKFLOW (7 Columns) */}
          <div className="skill-bento-card lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#0E0E10]/95 border border-white/8 backdrop-blur-md relative overflow-hidden group hover:border-[#ff5e00]/40 transition-all duration-300 w-full min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff5e00]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff7a00] block">
                    Workflow &amp; Tooling
                  </span>
                  <h3 className="text-xl font-bold text-white">Developer Tools</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500 hidden sm:inline">04_TOOLS</span>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Standard tools used for code authoring, version control management, and project publishing.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center hover:border-[#ff5e00]/40 transition-colors">
                <span className="text-sm font-bold text-white block mb-1">Git</span>
                <span className="text-[11px] font-mono text-neutral-400">Version Control</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center hover:border-[#ff5e00]/40 transition-colors">
                <span className="text-sm font-bold text-white block mb-1">GitHub</span>
                <span className="text-[11px] font-mono text-neutral-400">Repositories</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center hover:border-[#ff5e00]/40 transition-colors">
                <span className="text-sm font-bold text-white block mb-1">VS Code</span>
                <span className="text-[11px] font-mono text-neutral-400">Code Editor</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center hover:border-[#ff5e00]/40 transition-colors">
                <span className="text-sm font-bold text-white block mb-1">GitHub Pages</span>
                <span className="text-[11px] font-mono text-neutral-400">Live Hosting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
