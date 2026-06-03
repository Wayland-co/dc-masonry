import { Clock, MapPin } from "lucide-react";
import { CtaLink } from "@/components/integrations/cta-link";
import type { HeroProps } from "./types";

export function HeroCentered({ content, business, tier }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,color-mix(in_oklab,var(--color-primary)_22%,transparent),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_120%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-border)_50%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-border)_50%,transparent)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.18] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent_75%)]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-36">
        <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
          {business.tagline}
        </p>
        <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          {content.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {content.subhead}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
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

        <dl className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-6 text-sm">
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            <dt className="sr-only">Location</dt>
            <dd>{business.address}</dd>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
            <dt className="sr-only">Hours</dt>
            <dd>{business.hours}</dd>
          </div>
          <div className="hidden items-center gap-2 text-foreground/80 sm:flex">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
            <dt className="sr-only">Availability</dt>
            <dd>Booking new clients this quarter</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
