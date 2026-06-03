import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactFormLazy } from "@/components/forms/contact-form-lazy";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${content.business.name}.`,
};

export default function ContactPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tell us a little about your business and what you're trying to fix.
            We'll get back within one business day.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_minmax(0,360px)]">
          <ContactFormLazy />

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Reach us directly
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${content.business.email}`}
                    className="hover:text-primary"
                  >
                    {content.business.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:${content.business.phone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-primary"
                  >
                    {content.business.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span>{content.business.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span>{content.business.hours}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
