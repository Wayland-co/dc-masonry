"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { CtaLink } from "@/components/integrations/cta-link";
import { content } from "@/lib/content";
import { resolveRoutes } from "@/lib/layout";

// Nav is derived from the resolved route set (lib/layout.ts) — the single
// source of truth for which pages exist for this client. The content-presence
// rules (FAQ/Portfolio only when populated) live there, shared with each
// route's notFound() guard, instead of being re-implemented here.
const navLinks = resolveRoutes(content).map((route) => ({
  label: route.label,
  href: route.href,
}));

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          {content.business.logoUrl ? (
            <Image
              src={content.business.logoUrl}
              alt={content.business.name}
              width={150}
              height={40}
              className="h-9 w-auto"
              priority
            />
          ) : (
            content.business.name
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaLink
            href={content.hero.ctaPrimary.href}
            label={content.hero.ctaPrimary.label}
            tier={content.tier}
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="font-heading text-left">
                {content.business.name}
              </SheetTitle>
            </SheetHeader>
            <nav
              className="mt-6 flex flex-col gap-1 px-4"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-2 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <CtaLink
                  href={content.hero.ctaPrimary.href}
                  label={content.hero.ctaPrimary.label}
                  tier={content.tier}
                  className="mt-4 w-full"
                />
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
