import { HeroSplit } from "./hero-split";
import { HeroCentered } from "./hero-centered";
import { HeroBento } from "./hero-bento";

export { HeroSplit, HeroCentered, HeroBento };
export type { HeroProps, BentoTile } from "./types";

export const HERO_VARIANTS = {
  split: HeroSplit,
  centered: HeroCentered,
  bento: HeroBento,
} as const;

export type HeroVariant = keyof typeof HERO_VARIANTS;
