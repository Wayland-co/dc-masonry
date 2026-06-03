import type { Content, SectionCopyEntry } from "@/lib/content";

export type ServiceGridProps = {
  // `imageUrl` is an optional design-range field (Chunk 2); intersect so it's
  // accessible whether or not a given brief supplies it.
  services: readonly (Content["services"][number] & { imageUrl?: string })[];
  sectionCopy?: SectionCopyEntry;
};
