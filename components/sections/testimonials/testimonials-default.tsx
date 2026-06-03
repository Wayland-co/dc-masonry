import { Quote } from "lucide-react";
import type { Content } from "@/lib/content";

type TestimonialsProps = {
  items: Content["testimonials"];
  sectionCopy?: Content["sectionCopy"]["testimonials"];
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials({ items, sectionCopy }: TestimonialsProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {sectionCopy?.eyebrow ?? "Client stories"}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {sectionCopy?.heading ?? "Real systems, running for real businesses."}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {sectionCopy?.subhead ??
              "We build it, then we run it. Here's what that looks like a few months in."}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <figure
              key={`${item.author}-${item.company}`}
              className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <Quote
                className="h-6 w-6 text-primary/40"
                aria-hidden="true"
                strokeWidth={2}
              />
              <blockquote className="mt-4 flex-1">
                <p className="font-heading text-base leading-relaxed text-foreground sm:text-lg">
                  {item.quote}
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary"
                >
                  {getInitials(item.author)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {item.author}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {item.role} · {item.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
