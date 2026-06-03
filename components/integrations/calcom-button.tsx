// Only import this component when `calcom.enabled` is true at brief time.
// Importing it pulls @calcom/embed-react into the client bundle.

"use client";

import * as React from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type CalcomButtonProps = {
  username: string;
  eventType: string;
  children: React.ReactNode;
  className?: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
};

export function CalcomButton({
  username,
  eventType,
  children,
  className,
  variant,
  size,
}: CalcomButtonProps) {
  const namespace = `${username}-${eventType}`;
  const calLink = `${username}/${eventType}`;

  React.useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [namespace]);

  return (
    <Button
      type="button"
      data-cal-namespace={namespace}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
}
