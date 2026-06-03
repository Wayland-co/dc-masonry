import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/ui/service-icon";
import { ClientImage } from "@/components/ui/client-image";
import { content, type Content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: `${content.business.name} — services, scope, and how we work.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {content.business.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {content.services.map((service: Content["services"][number] & { imageUrl?: string }, i) => {
              const imageFirst = i % 2 === 0;
              return (
                <article
                  key={service.name}
                  className="grid items-center gap-8 border-b border-border pb-20 last:border-0 last:pb-0 md:grid-cols-2 md:gap-12"
                >
                  <ClientImage
                    src={service.imageUrl}
                    alt={`${service.name} — ${content.business.name}`}
                    label={`${service.name} photo`}
                    className={`aspect-[4/3] w-full rounded-2xl border border-border/60 ${
                      imageFirst ? "" : "md:order-last"
                    }`}
                  />
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <ServiceIcon name={service.icon} className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                      {service.shortDesc}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-foreground/90">
                      {service.longDesc}
                    </p>
                    <div className="mt-6">
                      <Button asChild>
                        <Link href="/contact">Talk about {service.name}</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
