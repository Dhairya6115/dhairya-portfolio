import { useRef } from "react";
import { ArrowDown, ArrowUpRight, MapPin, FileText, Code, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../animations/gsapConfig";
import { personalData } from "../data/portfolioData";
import { Button } from "../components/ui/Button";
import heroImg from "../assets/dhairya-hero.webp";

export function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(
    () => {
      // Respect accessibility: prefers-reduced-motion
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".hero-fade", { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Initial image entrance (smooth fade & scale down from 1.05 to 1.0)
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0.6, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
          0
        );
      }

      // 2. Cinematic staggered text & technical elements reveal
      tl.fromTo(
        ".hero-meta",
        { opacity: 0.4, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        0.05
      )
        .fromTo(
          ".hero-title-name",
          { opacity: 0.3, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0.1
        )
        .fromTo(
          ".hero-role-badge",
          { opacity: 0.4, x: -15 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
          0.2
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0.4, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          0.3
        )
        .fromTo(
          ".hero-tech-pill",
          { opacity: 0.4, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.3, stagger: 0.05, ease: "power2.out" },
          0.4
        )
        .fromTo(
          ".hero-cta-btn",
          { opacity: 0.4, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
          0.5
        );

      // Ensure all styles are cleanly restored
      tl.eventCallback("onComplete", () => {
        gsap.set(
          [
            ".hero-meta",
            ".hero-title-name",
            ".hero-role-badge",
            ".hero-desc",
            ".hero-tech-pill",
            ".hero-cta-btn",
          ],
          { clearProps: "opacity,transform" }
        );
      });

      // 3. Ambient orange glow breathing animation
      gsap.to(".ambient-orange-glow", {
        scale: 1.2,
        opacity: 0.35,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 4. Subtle background parallax on scroll
      if (imageRef.current && heroRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 5. Subtle mouse parallax on desktop (disabled on touch / reduced motion)
      if (!prefersReducedMotion && window.innerWidth >= 1024 && heroRef.current) {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const xPos = (clientX / innerWidth - 0.5) * 20;
          const yPos = (clientY / innerHeight - 0.5) * 20;

          if (glowRef.current) {
            gsap.to(glowRef.current, {
              x: xPos * 1.5,
              y: yPos * 1.5,
              duration: 1.2,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }
    },
    { scope: heroRef }
  );

  const techLabels = ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress"];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#050505] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28"
    >
      {/* ================= BACKGROUND PHOTOGRAPH LAYER ================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <div ref={imageRef} className="relative w-full h-full">
          <img
            src={heroImg}
            alt="Dhairya Kachhiya"
            className="w-full h-full object-cover object-[78%_center] sm:object-[82%_center] md:object-[86%_center] lg:object-[90%_center] opacity-45 sm:opacity-65 md:opacity-85 lg:opacity-95"
          />
        </div>

        {/* Strong Left-to-Right Black Gradient (Ensures flawless text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 via-40% md:via-55% lg:via-50% to-[#050505]/20 lg:to-transparent"></div>

        {/* Top & Bottom Vignette Transitions (Seamless blend with page) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505]"></div>

        {/* Subtle Decorative Technical Grid Lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>

        {/* Radiant Orange Ambient Rim Light & Glow Behind Portrait */}
        <div
          ref={glowRef}
          className="ambient-orange-glow absolute right-4 sm:right-16 top-1/3 -translate-y-1/2 w-[300px] sm:w-[480px] lg:w-[620px] h-[300px] sm:h-[480px] lg:h-[620px] rounded-full bg-gradient-to-br from-[#ff5e00]/25 via-[#ff7a00]/15 to-transparent blur-[110px] sm:blur-[140px] pointer-events-none"
        ></div>
        <div className="absolute left-1/4 bottom-10 w-72 h-72 rounded-full bg-[#ff5e00]/10 blur-[100px] pointer-events-none"></div>
      </div>

      {/* ================= FOREGROUND CONTENT LAYER ================= */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0"
      >
        <div className="max-w-2xl lg:max-w-3xl min-w-0">
          {/* Decorative Technical Status Bar */}
          <div className="hero-meta flex flex-wrap items-center gap-3 mb-6 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-[#ff7a00] flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5e00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5e00]"></span>
              </span>
              <span>Available for Work</span>
            </span>

            <span className="flex items-center gap-1.5 text-neutral-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-[#ff5e00]" />
              <span>{personalData.location}</span>
            </span>

            <span className="hidden sm:inline-block text-neutral-600">
              [WEB_DEV::WP_ENGINEERING]
            </span>
          </div>

          {/* Small Intro */}
          <p className="hero-meta text-xs sm:text-sm font-mono tracking-[0.25em] text-[#ff7a00] uppercase mb-2 font-semibold">
            HELLO, I'M
          </p>

          {/* Main Large Typography */}
          <h1 className="hero-title-name text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
            DHAIRYA <br />
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              KACHHIYA
            </span>
          </h1>

          {/* Professional Title (Stacked & Styled) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <div className="hero-role-badge px-3.5 py-1.5 rounded-lg bg-[#0e0e12]/90 border border-white/10 text-white font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2 shadow-sm">
              <Code className="w-4 h-4 text-[#ff5e00]" />
              <span>Junior Web Developer</span>
            </div>
            <span className="hero-role-badge text-neutral-600 hidden sm:inline">•</span>
            <div className="hero-role-badge px-3.5 py-1.5 rounded-lg bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-[#ff7a00] font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ff5e00]" />
              <span>WordPress Developer</span>
            </div>
          </div>

          {/* Clean Description */}
          <p className="hero-desc text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mb-8">
            Building responsive websites and functional digital experiences using modern web technologies.
          </p>

          {/* Technology Badges */}
          <div className="mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              Core Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {techLabels.map((tech) => (
                <span
                  key={tech}
                  className="hero-tech-pill px-3 py-1 text-xs font-mono rounded-lg bg-[#0e0e12]/80 border border-white/8 text-neutral-300 hover:border-[#ff5e00]/50 hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
              className="hero-cta-btn"
            >
              Explore My Work
            </Button>

            {/* Direct Download Resume Button pointing to verified PDF */}
            <Button
              href={personalData.resumeUrl}
              download="Dhairya-Kachhiya-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={FileText}
              className="hero-cta-btn"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* ================= SCROLL DOWN INDICATOR ================= */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00] rounded-xl p-1"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 group-hover:text-[#ff7a00] transition-colors">
          Scroll to explore
        </span>
        <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#ff5e00]/50 bg-[#0e0e12]/60 flex items-center justify-center transition-colors">
          <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#ff5e00] transition-transform group-hover:translate-y-0.5 animate-bounce" />
        </div>
      </a>
    </section>
  );
}
