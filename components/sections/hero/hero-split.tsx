import { Clock, MapPin } from "lucide-react";
import { CtaLink } from "@/components/integrations/cta-link";
import { ClientImage } from "@/components/ui/client-image";
import type { HeroProps } from "./types";

export function HeroSplit({ content, business, tier }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_oklab,var(--color-primary)_14%,transparent),transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {business.tagline}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {content.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
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

          <dl className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 text-sm">
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

        <div className="relative hidden lg:col-span-5 lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent"
          />
          <ClientImage
            src={content.imageUrl}
            alt={`${business.name} — ${content.headline}`}
            label="Hero photo — the team, a happy client, or your space"
            className="relative h-full min-h-[460px] w-full rounded-3xl border border-border/60 shadow-[0_30px_80px_-20px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]"
          />
        </div>
      </div>
    </section>
  );
}
