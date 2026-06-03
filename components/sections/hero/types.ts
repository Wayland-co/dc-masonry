import type { Content, Tier } from "@/lib/content";

export type BentoTile = {
  label: string;
  description?: string;
  icon?: string;
};

export type HeroProps = {
  // `imageUrl` is an optional design-range field (Chunk 2); intersect so it's
  // accessible whether or not a given brief supplies it.
  content: Content["hero"] & { imageUrl?: string };
  business: Content["business"];
  services: readonly (Content["services"][number] & { imageUrl?: string })[];
  tier: Tier;
  bento?: readonly BentoTile[];
};
