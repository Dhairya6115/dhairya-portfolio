import { useRef } from "react";
import { Calendar, MapPin, CheckCircle2, Building2, School } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapConfig";

export function Experience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".timeline-block", { opacity: 1 });
        return;
      }

      gsap.fromTo(
        ".experience-header",
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
        ".timeline-block",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
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

  const experiences = [
    {
      id: "exp-webvision",
      position: "Web Development Trainee & Intern",
      company: "Webvision Arena",
      duration: "June 2026 – September 2026",
      location: "Vadodara, Gujarat, India",
      type: "Internship & Practical Training",
      icon: Building2,
      summary:
        "Completed structured training and internship covering HTML, CSS, JavaScript, jQuery, PHP, SQL and WordPress.",
      points: [
        "Practiced building and styling web pages using semantic HTML and responsive CSS.",
        "Worked with JavaScript and jQuery for interactive DOM behaviors and scripting.",
        "Practiced PHP and SQL database connectivity for dynamic data handling.",
        "Worked on WordPress site setup and content management as part of the program.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "SQL", "WordPress"],
    },
    {
      id: "exp-school",
      position: "Computer Teacher",
      company: "Shree Gangabai Sarvajanik High School",
      duration: "2023 (One-year contract)",
      location: "Gujarat, India",
      type: "Academic Contract",
      icon: School,
      summary:
        "Delivered computer lessons to school students, focusing on digital literacy, operating system basics, and foundational software understanding.",
      points: [
        "Taught computer lessons to school students.",
        "Explained technical concepts in simple language.",
        "Developed communication and presentation skills.",
        "Managed classroom activities and planned lessons independently.",
      ],
      technologies: ["Computer Fundamentals", "Operating Systems", "Classroom Instruction", "Digital Literacy"],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-28 sm:py-36 relative bg-[#070709] text-neutral-100 overflow-hidden"
    >
      {/* Ambient Orange Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[580px] h-[480px] bg-[#ff5e00]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* ================= SECTION HEADER ================= */}
        <div className="experience-header max-w-3xl mb-16 sm:mb-20 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-xs font-mono text-[#ff7a00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse"></span>
            <span>// 04 — CAREER TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            MY PROFESSIONAL <br />
            <span className="text-[#ff5e00] orange-text-glow">JOURNEY</span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Hands-on technical internship training and classroom instruction experience with clear responsibilities and demonstrated growth.
          </p>
        </div>

        {/* ================= VERTICAL TIMELINE CONTAINER ================= */}
        <div className="relative w-full min-w-0">
          {/* Vertical Glowing Timeline Line (Accurately aligned with node centers) */}
          <div className="absolute left-[14px] sm:left-[22px] top-6 bottom-8 w-[2px] bg-gradient-to-b from-[#ff5e00] via-[#ff7a00]/40 to-white/5 pointer-events-none"></div>

          <div className="space-y-10 sm:space-y-14 w-full min-w-0">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.id}
                  className="timeline-block relative pl-10 sm:pl-16 w-full min-w-0 max-w-full"
                >
                  {/* Glowing Animated Timeline Connector Node (Centered precisely over line) */}
                  <div className="absolute left-[14px] sm:left-[22px] top-6 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#050505] border-2 border-[#ff5e00] flex items-center justify-center shadow-lg shadow-[#ff5e00]/25 z-10">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff7a00] animate-ping opacity-75"></span>
                    <span className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5e00]"></span>
                  </div>

                  {/* Timeline Glass Card — Fully responsive with natural text wrapping */}
                  <div className="w-full min-w-0 max-w-full p-5 sm:p-7 lg:p-8 rounded-2xl bg-[#0E0E10]/95 border border-white/8 backdrop-blur-md relative group hover:border-[#ff5e00]/40 transition-all duration-300 shadow-xl shadow-black/40">
                    {/* Top Hairline Gradient Accent */}
                    <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#ff5e00]/50 to-transparent"></div>

                    {/* Card Header — Stacks naturally on mobile/tablet; switches to side-by-side on wide screens */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5 pb-5 border-b border-white/8 w-full min-w-0">
                      <div className="min-w-0 flex-1 space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#ff5e00]/10 border border-[#ff5e00]/20 text-[11px] font-mono text-[#ff7a00] max-w-full">
                          <Icon className="w-3.5 h-3.5 text-[#ff5e00] shrink-0" />
                          <span className="truncate">{exp.type}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight break-words">
                          {exp.position}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-[#ff7a00] break-words">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 shrink-0 max-w-full">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-200 max-w-full break-words">
                          <Calendar className="w-3.5 h-3.5 text-[#ff5e00] shrink-0" />
                          <span>{exp.duration}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-400 max-w-full break-words">
                          <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Summary Statement */}
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5 font-normal break-words">
                      {exp.summary}
                    </p>

                    {/* Factual Bullet Points */}
                    <div className="space-y-2.5 mb-6 w-full min-w-0">
                      {exp.points.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 min-w-0"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#ff5e00] shrink-0 mt-0.5" />
                          <span className="leading-relaxed break-words min-w-0 flex-1">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Associated Skills / Domain Tags */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 w-full min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mr-1 shrink-0">
                        Domain:
                      </span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/8 text-[11px] font-mono text-neutral-300 break-words"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
