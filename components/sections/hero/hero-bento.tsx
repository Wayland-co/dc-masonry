import { CtaLink } from "@/components/integrations/cta-link";
import { ServiceIcon } from "@/components/ui/service-icon";
import type { HeroProps, BentoTile } from "./types";

export function HeroBento({ content, business, services, tier, bento }: HeroProps) {
  const tiles: readonly BentoTile[] =
    bento && bento.length > 0
      ? bento.slice(0, 4)
      : services.slice(0, 4).map((service) => ({
          label: service.name,
          description: service.shortDesc,
          icon: service.icon,
        }));

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_-10%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-28">
        <div className="lg:col-span-5">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {business.tagline}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            {content.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {content.subhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink
              href={content.ctaPrimary.href}
              label={content.ctaPrimary.label}
              tier={tier}
              size="lg"
            />
            <CtaLink
              href={content.ctaSecondary.href}
              label={content.ctaSecondary.label}
              tier={tier}
              variant="outline"
              size="lg"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {tiles.map((tile, idx) => {
              return (
                <li
                  key={tile.label}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-[0_14px_40px_-20px_color-mix(in_oklab,var(--color-primary)_28%,transparent)] transition-colors hover:bg-card/90"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,color-mix(in_oklab,var(--color-primary)_16%,transparent),transparent_60%)] opacity-80"
                  />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ServiceIcon name={tile.icon ?? "sparkles"} className="h-5 w-5" />
                  </div>
                  <p className="relative mt-4 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="relative mt-1 font-heading text-lg font-semibold text-foreground">
                    {tile.label}
                  </p>
                  {tile.description && (
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {tile.description}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
