import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import type { Tier } from "@/lib/content";
import {
  getBookingDirectUrl,
  getBookingProvider,
  getCalcomEventType,
  getCalcomUsername,
  getCalendlyUrl,
} from "@/lib/integrations/booking";
import { CalcomButton } from "@/components/integrations/calcom-button";
import { CalendlyButton } from "@/components/integrations/calendly-button";

type ButtonVariant = ComponentProps<typeof Button>["variant"];
type ButtonSize = ComponentProps<typeof Button>["size"];

type CtaLinkProps = {
  href: string;
  label: string;
  tier: Tier;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  linkClassName?: string;
  children?: ReactNode;
};

const BOOKING_SENTINEL = "booking";

export function CtaLink({
  href,
  label,
  tier,
  variant,
  size,
  className,
  linkClassName,
  children,
}: CtaLinkProps) {
  if (href === BOOKING_SENTINEL) {
    const provider = getBookingProvider();
    if (!provider) {
      return (
        <Button asChild variant={variant} size={size} className={className}>
          <Link href="/contact" className={linkClassName}>
            {children ?? label}
          </Link>
        </Button>
      );
    }
    if (tier !== "foundation") {
      if (provider === "calcom") {
        const username = getCalcomUsername();
        const eventType = getCalcomEventType();
        if (username) {
          return (
            <CalcomButton
              username={username}
              eventType={eventType}
              variant={variant}
              size={size}
              className={className}
            >
              {children ?? label}
            </CalcomButton>
          );
        }
      }
      if (provider === "calendly") {
        const url = getCalendlyUrl();
        if (url) {
          return (
            <CalendlyButton
              url={url}
              variant={variant}
              size={size}
              className={className}
            >
              {children ?? label}
            </CalendlyButton>
          );
        }
      }
    }
    const directUrl = getBookingDirectUrl();
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <Link href={directUrl ?? "/contact"} className={linkClassName}>
          {children ?? label}
        </Link>
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={href} className={linkClassName}>
        {children ?? label}
      </Link>
    </Button>
  );
}
