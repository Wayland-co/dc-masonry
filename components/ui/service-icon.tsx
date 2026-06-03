import { icons, type LucideIcon } from "lucide-react";

/**
 * Resolve a brief's kebab-case icon name (e.g. "user-round", "graduation-cap")
 * to any Lucide icon. Replaces the old hardcoded 3-icon map (compass/wrench/gauge,
 * leftover from the auto-repair example) that fell back to Compass for everything
 * else — so a dog trainer's services no longer all render as the same compass.
 * Unknown names fall back to a neutral Sparkles, not Compass.
 *
 * v1 note: imports lucide's full `icons` map for any-name support. If bundle size
 * becomes a concern, swap to a curated named-import map or `lucide-react/dynamic`
 * (tracked in the design-range kickoff, Chunk 3).
 */
function toPascalCase(name: string): string {
  return name
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon: LucideIcon =
    icons[toPascalCase(name) as keyof typeof icons] ?? icons.Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
