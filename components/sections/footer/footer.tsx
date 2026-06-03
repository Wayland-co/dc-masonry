import Link from "next/link";
import { content } from "@/lib/content";

const FOOTER_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  ...(content.faq.length > 0
    ? [{ label: "FAQ", href: "/faq" }]
    : []),
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="font-heading text-base font-semibold text-foreground"
            >
              {content.business.name}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {content.business.tagline}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {content.business.address}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold text-foreground">
              Site
            </h2>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold text-foreground">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${content.business.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {content.business.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.business.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {content.business.phone}
                </a>
              </li>
              <li>{content.business.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} {content.business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
