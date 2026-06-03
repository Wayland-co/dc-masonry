import { AboutBody } from "./about-body";
import { AboutStory } from "./about-story";

export { AboutBody, AboutStory };
export type { AboutProps } from "./types";

export const ABOUT_VARIANTS = {
  body: AboutBody,
  story: AboutStory,
} as const;

export type AboutVariant = keyof typeof ABOUT_VARIANTS;
