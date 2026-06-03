import type { ReactNode } from "react";
import { HERO_VARIANTS, type HeroVariant } from "@/components/sections/hero";
import {
  SERVICE_GRID_VARIANTS,
  type ServiceGridVariant,
} from "@/components/sections/service-grid";
import { Testimonials } from "@/components/sections/testimonials/testimonials-default";
import { AboutStrip } from "@/components/sections/about/about-strip";
import { CTA } from "@/components/sections/cta/cta-default";
import { FeaturedWork } from "@/components/sections/featured-work/featured-work";
import type { Content } from "@/lib/content";
import type { SectionKey } from "@/lib/layout";

type SectionProps = { content: Content };

// Each entry owns its own prop-wiring (and variant resolution) so the manifest
// in lib/layout.ts can stay pure data. Behavior here is 1:1 with the previous
// hand-written app/page.tsx — same variants, same props, same testimonials guard.

function HeroSection({ content }: SectionProps): ReactNode {
  const Hero = HERO_VARIANTS[content.componentVariants.hero as HeroVariant];
  return (
    <Hero
      content={content.hero}
      business={content.business}
      services={content.services}
      tier={content.tier}
      bento={content.bento}
    />
  );
}

function AboutSection({ content }: SectionProps): ReactNode {
  return (
    <AboutStrip
      business={content.business}
      values={content.about.values}
      sectionCopy={content.sectionCopy.about}
    />
  );
}

function ServiceGridSection({ content }: SectionProps): ReactNode {
  const ServiceGrid =
    SERVICE_GRID_VARIANTS[
      content.componentVariants.serviceGrid as ServiceGridVariant
    ];
  return (
    <ServiceGrid
      services={content.services}
      sectionCopy={content.sectionCopy.serviceGrid}
    />
  );
}

function TestimonialsSection({ content }: SectionProps): ReactNode {
  // Preserve the original guard: hide the section when there are no testimonials.
  return content.testimonials.length > 0 ? (
    <Testimonials
      items={content.testimonials}
      sectionCopy={content.sectionCopy.testimonials}
    />
  ) : null;
}

function CTASection({ content }: SectionProps): ReactNode {
  return <CTA cta={content.cta} tier={content.tier} />;
}

function FeaturedWorkSection({ content }: SectionProps): ReactNode {
  return <FeaturedWork items={content.portfolio} />;
}

export const SECTION_REGISTRY: Record<
  SectionKey,
  (props: SectionProps) => ReactNode
> = {
  hero: HeroSection,
  featuredWork: FeaturedWorkSection,
  about: AboutSection,
  serviceGrid: ServiceGridSection,
  testimonials: TestimonialsSection,
  cta: CTASection,
};
