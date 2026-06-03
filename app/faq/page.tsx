import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { content } from "@/lib/content";
import { isRouteActive } from "@/lib/layout";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about working with ${content.business.name}.`,
};

export default function FAQPage() {
  if (!isRouteActive(content, "faq")) {
    notFound();
  }

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          The questions we hear most often. If yours isn&apos;t here, just{" "}
          <a href="/contact" className="text-primary underline-offset-4 hover:underline">
            ask
          </a>
          .
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-10 w-full"
          defaultValue="faq-0"
        >
          {content.faq.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="font-heading text-left text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
