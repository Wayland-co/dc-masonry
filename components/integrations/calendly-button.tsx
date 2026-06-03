// Only import this component when `booking.enabled` is true and provider is
// `'calendly'` at brief time. Importing it pulls react-calendly into the
// client bundle.

"use client";

import * as React from "react";
import { PopupModal } from "react-calendly";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type CalendlyButtonProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
};

export function CalendlyButton({
  url,
  children,
  className,
  variant,
  size,
}: CalendlyButtonProps) {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      {mounted && (
        <PopupModal
          url={url}
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={document.body}
        />
      )}
    </>
  );
}
