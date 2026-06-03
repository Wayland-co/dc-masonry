import type { Content } from "@/lib/content";

/**
 * Compact home-page trust band, shown between the hero and the service grid.
 * Establishes credibility (the brief's `about.values`) before the service menu
 * without duplicating the full About page — deliberately lighter than the
 * about-body/about-story variants: a short eyebrow/heading + a tight values row,
 * no long-form body copy.
 */
export function AboutStrip({
  business,
  values,
  sectionCopy,
}: {
  business: Content["business"];
  values: Content["about"]["values"];
  sectionCopy?: Content["sectionCopy"]["about"];
}) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {sectionCopy?.eyebrow ?? `Why ${business.name}`}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {sectionCopy?.heading ?? "Why work with us"}
          </h2>
        </div>
        <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="border-t-2 border-primary/30 pt-4">
              <dt className="font-heading text-base font-semibold tracking-tight text-foreground">
                {value.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
