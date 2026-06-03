import { ServiceGridCards } from "./service-grid-cards";
import { ServiceGridProcessSteps } from "./service-grid-process-steps";

export { ServiceGridCards, ServiceGridProcessSteps };
export type { ServiceGridProps } from "./types";

export const SERVICE_GRID_VARIANTS = {
  cards: ServiceGridCards,
  "process-steps": ServiceGridProcessSteps,
} as const;

export type ServiceGridVariant = keyof typeof SERVICE_GRID_VARIANTS;
