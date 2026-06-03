import type { CSSProperties } from "react";
import type { AboutProps } from "./types";

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "•";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const PLACEHOLDER_GRADIENT =
  "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 85%, white) 0%, color-mix(in oklab, var(--color-primary) 65%, black) 100%)";

export function AboutStory({ about, business, sectionCopy }: AboutProps) {
  const portraitUrl = business.portraitUrl;
  const initials = getInitials(business.name);

  const portraitStyle: CSSProperties = portraitUrl
    ? {
        backgroundImage: `url("${portraitUrl}"), ${PLACEHOLDER_GRADIENT}`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }
    : { backgroundImage: PLACEHOLDER_GRADIENT };

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div
              role={portraitUrl ? "img" : undefined}
              aria-label={portraitUrl ? `Portrait — ${business.name}` : undefined}
              aria-hidden={portraitUrl ? undefined : true}
              style={portraitStyle}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--color-primary)_50%,transparent)]"
            >
              {!portraitUrl && (
                <span className="absolute inset-0 flex items-center justify-center font-heading text-7xl font-semibold tracking-tight text-white/85 sm:text-8xl">
                  {initials}
                </span>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
              {sectionCopy?.eyebrow ?? `About ${business.name}`}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
              {sectionCopy?.heading ?? "The story behind the studio."}
            </h2>
            {sectionCopy?.subhead && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {sectionCopy.subhead}
              </p>
            )}

            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <p>{about.body}</p>
              <p className="text-muted-foreground">{business.description}</p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-heading text-base font-semibold tracking-tight text-foreground">
                — {business.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {business.tagline}
              </p>
            </div>

            {about.values.length > 0 && (
              <div className="mt-8">
                <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  What we stand on
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {about.values.map((value) => (
                    <li
                      key={value.title}
                      className="rounded-xl border border-border bg-card/50 p-4"
                    >
                      <p className="font-heading text-sm font-semibold text-foreground">
                        {value.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {value.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
