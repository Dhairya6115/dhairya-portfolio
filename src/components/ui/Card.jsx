import { cn } from "../../utils/cn";

export function Card({ children, className = "", hover = true, glow = false, ...props }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-[#0E0E10]/95 border border-white/10 backdrop-blur-md transition-all duration-300 p-6",
        hover && "hover:border-[#ff5e00]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff5e00]/5",
        glow && "border-[#ff5e00]/30 shadow-lg shadow-[#ff5e00]/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
