import { content } from "@/lib/content";
import { manifestFor } from "@/lib/layout";
import { SECTION_REGISTRY } from "@/components/sections/registry";

// The homepage is composition-as-data: the client's archetype selects an ordered
// section manifest (lib/layout.ts), and SECTION_REGISTRY wires each key to its
// rendered section. To change which sections appear or their order, edit the
// manifest; to add a business archetype, add a manifest entry — not this file.
// Section *variants* and the *brand theme* remain orthogonal.
export default function HomePage() {
  const sections = manifestFor(content.archetype);
  return (
    <>
      {sections.map((key) => {
        const Section = SECTION_REGISTRY[key];
        return <Section key={key} content={content} />;
      })}
    </>
  );
}
