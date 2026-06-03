import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioGallery } from "@/components/sections/portfolio";
import { content } from "@/lib/content";
import { isRouteActive } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected work from ${content.business.name}.`,
};

export default function PortfolioPage() {
  if (!isRouteActive(content, "portfolio")) {
    notFound();
  }

  return <PortfolioGallery items={content.portfolio} />;
}
