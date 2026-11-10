import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./gsapConfig";

/**
 * Custom hook to add a magnetic physics pull effect to buttons or badges on hover.
 * @param {number} strength - Pull strength multiplier (default: 0.3)
 */
export function useMagnetic(strength = 0.3) {
  const elementRef = useRef(null);

  useGSAP(
    () => {
      const el = elementRef.current;
      if (!el) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = (clientX - centerX) * strength;
        const dy = (clientY - centerY) * strength;

        xTo(dx);
        yTo(dy);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: elementRef, dependencies: [strength] }
  );

  return elementRef;
}
