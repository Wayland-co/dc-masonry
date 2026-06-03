import type { AboutProps } from "./types";

export function AboutBody({ about, business, sectionCopy }: AboutProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
              {sectionCopy?.eyebrow ?? `About ${business.name}`}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
              {sectionCopy?.heading ?? "We don't sell tools. We run the system."}
            </h2>
            {sectionCopy?.subhead && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {sectionCopy.subhead}
              </p>
            )}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <p>{about.body}</p>
              <p className="text-muted-foreground">
                {business.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              What we value
            </p>
            <ul className="mt-6 space-y-6">
              {about.values.map((value, idx) => (
                <li
                  key={value.title}
                  className="flex gap-5 border-b border-border pb-6 last:border-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="font-heading text-sm font-medium tabular-nums text-primary"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {value.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
