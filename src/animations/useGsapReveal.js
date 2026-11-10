import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "./gsapConfig";

/**
 * Custom hook to reveal elements with a smooth GSAP fade & slide animation.
 * @param {Object} options
 * @param {string} options.selector - Target child selector (e.g., '.reveal-item')
 * @param {number} options.y - Starting vertical offset (default: 30)
 * @param {number} options.duration - Duration in seconds (default: 0.8)
 * @param {number} options.stagger - Stagger delay between items (default: 0.12)
 * @param {number} options.delay - Initial delay (default: 0)
 * @returns {React.RefObject} containerRef to attach to the parent wrapper
 */
export function useGsapReveal({
  selector = ".reveal-item",
  y = 30,
  duration = 0.8,
  stagger = 0.12,
  delay = 0,
} = {}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll(selector);
      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: y,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef, dependencies: [selector, y, duration, stagger, delay] }
  );

  return containerRef;
}
