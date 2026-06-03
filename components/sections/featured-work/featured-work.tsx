import Image from "next/image";
import Link from "next/link";
import type { Content } from "@/lib/content";

// Homepage "Our Work" gallery — leads with the client's actual projects.
// Renders nothing when there are no portfolio items, so non-visual verticals
// (e.g. a therapist) never get an empty section. Trades/contractors who live
// or die by their work photos get them front-and-center, above the fold-ish.
export function FeaturedWork({ items }: { items: Content["portfolio"] }) {
  if (items.length === 0) return null;
  const shown = items.slice(0, 6);
  return (
    <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our work
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              See the craftsmanship
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden shrink-0 text-sm font-medium text-primary hover:underline sm:block"
          >
            View all projects &rarr;
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item, i) => (
            <li key={`${item.title}-${i}`}>
              <div className="group relative overflow-hidden rounded-lg border border-border bg-muted">
                <div className="relative aspect-square">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 2}
                  />
                </div>
                {item.title ? (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
                    <p className="font-heading text-sm font-medium text-white">
                      {item.title}
                    </p>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 sm:hidden">
          <Link href="/portfolio" className="text-sm font-medium text-primary hover:underline">
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
