import { cn } from "../../utils/cn";

export function Badge({ children, variant = "default", dot = false, className = "", ...props }) {
  const variantStyles = {
    default: "bg-white/5 border border-white/10 text-neutral-300",
    orange: "bg-[#ff5e00]/10 border border-[#ff5e00]/30 text-[#ff7a00]",
    success: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all",
        variantStyles[variant] || variantStyles.orange,
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5e00] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5e00]"></span>
        </span>
      )}
      {children}
    </span>
  );
}
