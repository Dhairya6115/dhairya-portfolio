import { cn } from "../../utils/cn";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  icon: Icon,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#ff5e00] text-black font-semibold hover:bg-[#ff782d] orange-glow-sm hover:orange-glow active:scale-[0.98]",
    secondary:
      "bg-[#121217] text-[#F5F5F5] border border-white/10 hover:border-[#ff5e00]/50 hover:text-white hover:bg-[#17171e] active:scale-[0.98]",
    outline:
      "bg-transparent border border-[#ff5e00]/50 text-[#ff7a00] hover:bg-[#ff5e00]/10 hover:border-[#ff5e00] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#999999] hover:text-[#ff7a00] hover:bg-white/5 active:scale-[0.98]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
      {children}
    </button>
  );
}
