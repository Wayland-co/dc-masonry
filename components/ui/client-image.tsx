import Image from "next/image";
import { ServiceIcon } from "@/components/ui/service-icon";

/**
 * Renders a client-supplied photo, or — when none is provided — a clear
 * "photo needed" placeholder. Per the design-range Gate D (Will, S59): we never
 * use stock imagery to paper over a missing photo; we flag the gap loudly so it's
 * obvious what to collect from the client. The scaffolder also prints a photo
 * manifest of every unfilled slot.
 *
 * `src` accepts a local path (`/images/foo.jpg`) or a full URL — next.config's
 * remotePatterns already allow any host.
 */
export function ClientImage({
  src,
  alt,
  label,
  className,
}: {
  src?: string;
  alt: string;
  /** Human label for the placeholder, e.g. "Group Classes photo". */
  label: string;
  /** Sizing/shape classes for the outer box (e.g. aspect + rounded). */
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-muted ${className ?? ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border bg-muted/40 p-4 text-center ${className ?? ""}`}
      role="img"
      aria-label={`Photo needed: ${label}`}
    >
      <ServiceIcon name="camera" className="h-6 w-6 text-muted-foreground/60" />
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Photo needed
      </p>
      <p className="text-[11px] leading-tight text-muted-foreground/70">{label}</p>
    </div>
  );
}
