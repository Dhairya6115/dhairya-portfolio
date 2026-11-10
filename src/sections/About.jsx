import { useRef } from "react";
import { GraduationCap, Briefcase, MapPin, Laptop, CheckCircle2, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapConfig";
import { personalData, education, experience } from "../data/portfolioData";

export function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".about-card", { opacity: 1 });
        return;
      }

      gsap.fromTo(
        ".about-header",
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
        ".about-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const eduInfo = education?.[0] || {
    degree: "B.Sc. Computer Applications & Information Technology",
    institution: "Shri D. N. Institute of Computer Application",
    period: "2024 – 2027",
    status: "Currently pursuing Semester 5",
    location: "Gujarat, India",
  };

  const internInfo = experience?.find((e) => e.company.includes("Webvision")) || {
    role: "Web Development Trainee & Intern",
    company: "Webvision Arena",
    period: "June 2026 – September 2026",
    location: "Vadodara, Gujarat, India",
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 sm:py-36 relative bg-[#050505] overflow-hidden text-neutral-100"
    >
      {/* Radiant Orange Ambient Glow Backdrop */}
      <div className="absolute top-1/4 right-0 w-[480px] h-[480px] bg-[#ff5e00]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#ff7a00]/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* ================= EDITORIAL SECTION HEADER ================= */}
        <div className="about-header max-w-4xl mb-16 sm:mb-20 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-xs font-mono text-[#ff7a00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse"></span>
            <span>// 01 — A LITTLE ABOUT ME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
            I'M DHAIRYA. <br />
            <span className="text-[#ff5e00] orange-text-glow">
              I TURN IDEAS INTO WEBSITES.
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Junior Web Developer &amp; WordPress Developer based in {personalData.location}, dedicated to crafting responsive, reliable, and functional digital experiences.
          </p>
        </div>

        {/* ================= ASYMMETRIC EDITORIAL GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start w-full min-w-0">
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 w-full min-w-0">
            {/* Primary Story Card */}
            <div className="about-card p-7 sm:p-9 rounded-2xl bg-[#0E0E10]/95 border border-white/8 backdrop-blur-md relative overflow-hidden group hover:border-[#ff5e00]/40 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff5e00] via-[#ff7a00]/50 to-transparent"></div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff7a00] flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#ff5e00]" />
                  <span>Profile Overview</span>
                </span>
                <span className="text-xs font-mono text-neutral-500">22.3°N, 73.1°E</span>
              </div>

              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed mb-5 font-normal">
                {personalData.bio}
              </p>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                I believe that good websites should be accessible, visually clean, and built on rock-solid fundamentals. My focus is on writing clean HTML, CSS, JavaScript, and PHP while configuring custom WordPress websites that clients and users can navigate effortlessly.
              </p>

              {/* Verified Key Profile Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/8 text-left">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ff5e00]" />
                    Vadodara, IN
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Specialization
                  </span>
                  <span className="text-sm font-semibold text-[#ff7a00] mt-1 block">
                    Web &amp; WordPress
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Languages
                  </span>
                  <span className="text-sm font-semibold text-white mt-1 block">
                    Gujarati, Hindi, English
                  </span>
                </div>
              </div>
            </div>

            {/* Practical Focus Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="about-card p-6 rounded-2xl bg-[#0E0E10]/80 border border-white/8 hover:border-[#ff5e00]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/10 border border-[#ff5e00]/20 flex items-center justify-center text-[#ff5e00] mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">
                  Responsive Web Design
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Building fluid layouts that adapt seamlessly across smartphones, tablets, laptops, and wide desktop displays without layout breakage.
                </p>
              </div>

              <div className="about-card p-6 rounded-2xl bg-[#0E0E10]/80 border border-white/8 hover:border-[#ff5e00]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/10 border border-[#ff5e00]/20 flex items-center justify-center text-[#ff5e00] mb-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">
                  WordPress &amp; Practical PHP
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Configuring content structures, theme customization, and server-side logic to deliver easy-to-manage web solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Academic & Practical Experience Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 w-full min-w-0">
            {/* Elegant Education Card */}
            <div className="about-card p-7 rounded-2xl bg-[#0E0E10]/90 border border-white/8 relative overflow-hidden group hover:border-[#ff5e00]/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/10 border border-[#ff5e00]/30 flex items-center justify-center text-[#ff5e00]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff7a00] block">
                    Higher Education
                  </span>
                  <h3 className="text-lg font-bold text-white">Academic Journey</h3>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-base font-semibold text-white leading-snug">
                  {eduInfo.degree}
                </h4>
                <p className="text-sm text-neutral-300 font-medium">
                  {eduInfo.institution}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-neutral-400">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300">
                    {eduInfo.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#ff5e00]/10 text-[#ff7a00] border border-[#ff5e00]/20">
                    {eduInfo.status}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 text-xs text-neutral-400">
                Focusing on computer application fundamentals, databases, web technologies, and software development methodologies.
              </div>
            </div>

            {/* Internship Spotlight Card */}
            <div className="about-card p-7 rounded-2xl bg-[#0E0E10]/90 border border-white/8 relative group hover:border-[#ff5e00]/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff5e00]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff7a00] block">
                    Practical Experience
                  </span>
                  <h3 className="text-lg font-bold text-white">{internInfo.company}</h3>
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-base font-semibold text-white">
                  {internInfo.role}
                </h4>
                <p className="text-xs font-mono text-neutral-400">
                  {internInfo.period} • {internInfo.location}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5e00] shrink-0 mt-0.5" />
                  <span>Hands-on training in HTML, CSS, JavaScript, PHP, MySQL, and WordPress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5e00] shrink-0 mt-0.5" />
                  <span>Practical application of responsive website construction and database connectivity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
