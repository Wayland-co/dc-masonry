import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/ui/service-icon";
import { ClientImage } from "@/components/ui/client-image";
import type { ServiceGridProps } from "./types";

export function ServiceGridCards({ services, sectionCopy }: ServiceGridProps) {
  return (
    <section id="services" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
              {sectionCopy?.eyebrow ?? "What we do"}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {sectionCopy?.heading ?? "Three services, sequenced as one engagement."}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {sectionCopy?.subhead ?? "Plan it, build it, run it. Same team, same standards, end to end."}
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 self-start text-sm font-medium text-foreground/80 transition-colors hover:text-foreground md:self-end"
          >
            See full services
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, idx) => {
            return (
              <article
                key={service.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_20px_50px_-25px_color-mix(in_oklab,var(--color-primary)_45%,transparent)]"
              >
                <ClientImage
                  src={service.imageUrl}
                  alt={service.name}
                  label={`${service.name} photo`}
                  className="mb-5 aspect-[4/3] w-full rounded-xl"
                />
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </div>
                  <span className="font-heading text-sm font-medium tabular-nums text-muted-foreground/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDesc}
                </p>
                <Link
                  href={`/services#${service.name.toLowerCase()}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  Learn more
                  <span className="sr-only"> about {service.name}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
