import { PortfolioGallery } from "./portfolio-gallery";

export { PortfolioGallery };
export type { PortfolioGalleryProps } from "./types";

export const PORTFOLIO_VARIANTS = {
  gallery: PortfolioGallery,
} as const;

export type PortfolioVariant = keyof typeof PORTFOLIO_VARIANTS;
