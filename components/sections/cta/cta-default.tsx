import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/integrations/cta-link";
import type { Content, Tier } from "@/lib/content";

type CTAProps = {
  cta: Content["cta"];
  tier: Tier;
};

export function CTA({ cta, tier }: CTAProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--color-primary)_60%,transparent)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklab,white_18%,transparent),transparent_55%),radial-gradient(circle_at_85%_85%,color-mix(in_oklab,white_10%,transparent),transparent_60%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,white_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,white_12%,transparent)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30"
          />

          <div className="relative grid gap-8 px-8 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-16 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {cta.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                {cta.subhead}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <CtaLink
                href={cta.button.href}
                label={cta.button.label}
                tier={tier}
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                linkClassName="inline-flex items-center justify-center gap-2"
              >
                {cta.button.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
