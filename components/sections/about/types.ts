import type { Content, SectionCopyEntry } from "@/lib/content";

export type AboutProps = {
  about: Content["about"];
  business: Content["business"];
  sectionCopy?: SectionCopyEntry;
};
