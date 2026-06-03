import { ServiceIcon } from "@/components/ui/service-icon";
import type { ServiceGridProps } from "./types";

export function ServiceGridProcessSteps({
  services,
  sectionCopy,
}: ServiceGridProps) {
  return (
    <section id="services" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {sectionCopy?.eyebrow ?? "How we work"}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {sectionCopy?.heading ?? "A step-by-step engagement."}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {sectionCopy?.subhead ??
              "Each engagement moves through the same sequence — predictable for you, sequenced for us."}
          </p>
        </div>

        <ol className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-x-10">
          {services.map((service, idx) => {
            const stepNum = String(idx + 1).padStart(2, "0");
            return (
              <li
                key={service.name}
                className="group relative flex flex-col [&:not(:last-child)]:pb-12 lg:[&:not(:last-child)]:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-5 top-12 -bottom-0 w-px bg-gradient-to-b from-border to-transparent group-[:last-child]:hidden lg:hidden"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute hidden lg:block left-12 top-5 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-border to-transparent group-[:last-child]:lg:hidden"
                />

                <div className="flex items-center gap-4">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-primary)_8%,transparent)]">
                    <ServiceIcon name={service.icon} className="h-4 w-4" />
                  </div>
                  <span className="font-heading text-xs font-medium uppercase tracking-[0.22em] tabular-nums text-muted-foreground">
                    Step {stepNum}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-foreground">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDesc}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
