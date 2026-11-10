import { Badge } from "./Badge";

export function SectionHeading({
  badge,
  badgeVariant = "orange",
  title,
  highlight,
  subtitle,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title} {highlight && <span className="text-[#ff5e00] orange-text-glow">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}>
        <span className="h-1 w-12 rounded-full bg-[#ff5e00]"></span>
        <span className="h-1 w-2 rounded-full bg-[#ff7a00]"></span>
      </div>
    </div>
  );
}
