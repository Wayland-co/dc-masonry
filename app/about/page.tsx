import type { Metadata } from "next";
import {
  ABOUT_VARIANTS,
  type AboutVariant,
} from "@/components/sections/about";
import { Team } from "@/components/sections/about/team";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${content.business.name}.`,
};

export default function AboutPage() {
  const About =
    ABOUT_VARIANTS[content.componentVariants.about as AboutVariant];

  return (
    <>
      <About
        about={content.about}
        business={content.business}
        sectionCopy={content.sectionCopy.about}
      />

      {content.team.length > 0 && <Team members={content.team} />}
    </>
  );
}
