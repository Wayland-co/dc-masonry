"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PortfolioGalleryProps } from "./types";

const CATEGORY_FILTER_THRESHOLD = 4;

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const item of items) {
      if (item.category) set.add(item.category);
    }
    return Array.from(set);
  }, [items]);

  const showFilter = categories.length >= CATEGORY_FILTER_THRESHOLD;

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  if (items.length === 0) return null;

  const visibleItems =
    activeCategory === null
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Selected work
          </p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Portfolio
          </h1>
        </div>

        {showFilter && (
          <div
            role="tablist"
            aria-label="Filter portfolio by category"
            className="mb-8 flex flex-wrap gap-2"
          >
            <FilterChip
              label="All"
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            />
            {categories.map((category) => (
              <FilterChip
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        )}

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <PortfolioCard
              key={`${item.title}-${index}`}
              item={item}
              priority={index < 2}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={
        active
          ? "rounded-full border border-primary bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors"
          : "rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
      }
    >
      {label}
    </button>
  );
}

function PortfolioCard({
  item,
  priority,
}: {
  item: PortfolioGalleryProps["items"][number];
  priority: boolean;
}) {
  const inner = (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-muted">
      <div className="relative aspect-square">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-heading text-base font-semibold">{item.title}</p>
          {item.category && (
            <p className="mt-0.5 text-xs uppercase tracking-widest text-white/80">
              {item.category}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <li>
        <Link
          href={item.href}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={
            item.category ? `${item.title} (${item.category})` : item.title
          }
        >
          {inner}
        </Link>
      </li>
    );
  }

  return <li aria-label={item.category ? `${item.title} (${item.category})` : item.title}>{inner}</li>;
}
