import type { Archetype, Content } from "@/lib/content";

/**
 * Section manifest — the STRUCTURAL layer.
 *
 * Pure data: which sections render, and in what order, for a given archetype.
 * This is the single thing an archetype swaps. Section *variants*
 * (componentVariants / resolveComponents) and the *brand theme* (lib/theme.ts)
 * stay orthogonal:
 *
 *   archetype  -> which sections exist + order   (this file)
 *   variant    -> presentation of a section      (componentVariants)
 *   theme      -> brand tokens                    (lib/theme.ts)
 *
 * The registry mapping each key to a rendered section lives in
 * components/sections/registry.tsx; app/page.tsx walks the resolved manifest
 * through it.
 */

export type SectionKey =
  | "hero"
  | "featuredWork"
  | "about"
  | "serviceGrid"
  | "testimonials"
  | "cta";

/** Ordered homepage composition for the service-business archetype (the default). */
export const homeSections: readonly SectionKey[] = [
  "hero",
  "featuredWork",
  "about",
  "serviceGrid",
  "testimonials",
  "cta",
];

/**
 * Homepage section manifest per archetype. `service` is the only archetype the
 * template implements today — dentists, dog trainers, consultants, lawyers,
 * etc. all share it. Adding a `hospitality` or `commerce` entry is a compile
 * error until you widen `Archetype` AND build the new sections + registry
 * entries they need; that forcing function is intentional.
 */
export const ARCHETYPE_MANIFESTS: Record<Archetype, readonly SectionKey[]> = {
  service: homeSections,
};

/** Resolve the ordered section manifest for a client's archetype. */
export function manifestFor(archetype: Archetype): readonly SectionKey[] {
  return ARCHETYPE_MANIFESTS[archetype];
}

// ---------------------------------------------------------------------------
// Route set — the page-level half of the STRUCTURAL layer.
//
// The ordered set of top-level pages (and their nav labels) for an archetype.
// A route may be content-conditional: FAQ and Portfolio only exist when the
// client actually has that content. That rule lives HERE, once, and is the
// single source of truth shared by:
//   - the header nav (components/sections/header) — which links to render
//   - each route's page.tsx — its notFound() guard (isRouteActive)
// (Home is not listed — it always exists; `dev` is template-only tooling
// excluded from client scaffolds by cli/src/lib/copy-template.ts.)
//
// SCAFFOLD-TIME PRUNING (future): when a second archetype lands, copy-template
// becomes the scaffold-time consumer of ARCHETYPE_ROUTES — it would copy only
// the app/<route> dirs an archetype declares (a commerce site ships /shop, a
// service site does not). That is a no-op with one archetype, so it is left as
// this documented seam rather than built speculatively.
// ---------------------------------------------------------------------------

export type RouteKey = "services" | "about" | "portfolio" | "faq" | "contact";

export type RouteDef = {
  key: RouteKey;
  /** Nav label. */
  label: string;
  /** Route path. */
  href: string;
  /**
   * Whether this route is active for a given client. Omitted = always active
   * for the archetype; present = content-conditional (gates on content
   * presence, e.g. only show Portfolio when there are portfolio items).
   */
  isActive?: (content: Content) => boolean;
};

/** Service-business pages, in nav order. */
const SERVICE_ROUTES: readonly RouteDef[] = [
  { key: "services", label: "Services", href: "/services" },
  {
    key: "portfolio",
    label: "Portfolio",
    href: "/portfolio",
    isActive: (content) => content.portfolio.length > 0,
  },
  { key: "about", label: "About", href: "/about" },
  {
    key: "faq",
    label: "FAQ",
    href: "/faq",
    isActive: (content) => content.faq.length > 0,
  },
  { key: "contact", label: "Contact", href: "/contact" },
];

/** Route set per archetype (mirrors ARCHETYPE_MANIFESTS for pages). */
export const ARCHETYPE_ROUTES: Record<Archetype, readonly RouteDef[]> = {
  service: SERVICE_ROUTES,
};

/** The active, ordered route set for a client (archetype + content-presence). */
export function resolveRoutes(content: Content): readonly RouteDef[] {
  return ARCHETYPE_ROUTES[content.archetype].filter((route) =>
    route.isActive ? route.isActive(content) : true,
  );
}

/** Whether a given route is active for a client — used by route notFound() guards. */
export function isRouteActive(content: Content, key: RouteKey): boolean {
  return resolveRoutes(content).some((route) => route.key === key);
}
